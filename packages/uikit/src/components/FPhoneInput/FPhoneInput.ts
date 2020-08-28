import "./FPhoneInput.scss";
import { Component, Vue, PropSync } from "vue-property-decorator";
import { CreateElement, VNode } from "vue/types/umd";
import FBottomSheet from "../FBottomSheet";
import { VTextField, VList, VListItem, VListItemTitle } from "vuetify/lib";
import countryCodes from "../../assets/country-code.json";
import { $t } from "../../utils/helper";

const countries = Object.keys(countryCodes).map((k) => ({
  name: countryCodes[k].name,
  code: countryCodes[k].dialCode + "",
}));

@Component
class FPhoneInput extends Vue {
  @PropSync("code") bindCode!: string;

  @PropSync("phone") bindPhone!: string;

  filter = "";

  sheet = false;

  get filterCounties() {
    return countries.filter((country) => {
      const name = String(country.name).toLowerCase();
      const code = String(country.code).toLowerCase();
      return name.startsWith(this.filter) || code.startsWith(this.filter);
    });
  }

  handleSelect(code) {
    this.bindCode = code;
    this.sheet = false;
  }

  genInput({ on }): VNode {
    const h = this.$createElement;

    return h(
      VTextField,
      {
        domProps: { "aria-autocomplete": false },
        props: {
          autofocus: true,
          placeholder: "phone number",
          type: "number",
          value: this.bindPhone,
        },
        on: {
          update: (val) => (this.bindPhone = val),
        },
      },
      [
        h(
          "div",
          {
            on,
            staticClass: "px-4 f-phone-input__code",
            slot: "prepend-inner",
          },
          this.bindCode,
        ),
      ],
    );
  }

  genSearch() {
    const h = this.$createElement;

    return h(VTextField, {
      props: {
        value: this.filter,
        placeholder: $t(this, "search"),
        "hide-details": true,
        "single-line": true,
      },
      on: { input: (val) => (this.filter = val) },
      slot: "subheader",
    });
  }

  genCountryList() {
    const h = this.$createElement;

    const countryItems = this.filterCounties.map((item) =>
      h(
        VListItem,
        {
          props: {
            value: item.code,
            "input-value": this.bindCode === item.code,
            "active-class": "primary--text",
          },
          on: { click: () => this.handleSelect(item.code) },
        },
        [
          h(VListItemTitle, [
            h("span", { staticClass: "font-weight-bold mr-2" }, [item.code]),
            item.name,
          ]),
        ],
      ),
    );

    return h(VList, [countryItems]);
  }

  render(h: CreateElement): VNode {
    return h(
      FBottomSheet,
      {
        props: {
          value: this.sheet,
        },
        on: {
          change: (val) => (this.sheet = val),
        },
        scopedSlots: {
          activator: ({ on }) => {
            return this.genInput({ on });
          },
        },
      },
      [
        h("div", { slot: "title" }, $t(this, "select_phone_code")),
        this.genSearch(),
        this.genCountryList(),
      ],
    );
  }
}

export default FPhoneInput;
export { FPhoneInput };
