import "./FPhoneInput.scss";
import { Component, Vue, PropSync } from "vue-property-decorator";
import { CreateElement, VNode } from "vue/types/umd";
import FBottomSheet from "../FBottomSheet";
import {
  VTextField,
  VVirtualScroll,
  VListItem,
  VListItemTitle,
  VIcon,
} from "vuetify/lib";
import countryCodes from "../../assets/country-code.json";
import { $t } from "../../utils/helper";
import { mdiChevronDown } from "@mdi/js";

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
        staticClass: "f-phone-input",
        domProps: { "aria-autocomplete": false },
        attrs: { "hide-details": true, solo: true },
        props: {
          autofocus: true,
          placeholder: $t(this, "phone_number"),
          type: "number",
          value: this.bindPhone,
        },
        on: {
          input: (val) => (this.bindPhone = val),
        },
        scopedSlots: this.$scopedSlots,
      },
      [
        h(
          "div",
          {
            on,
            staticClass: "pl-1 pr-2 f-phone-input__code",
            slot: "prepend-inner",
          },
          [
            h("span", {}, `+${this.bindCode}`),
            h(
              VIcon,
              {
                slot: "append-inner",
                props: { size: "20", color: "greyscale_1" },
              },
              [mdiChevronDown],
            ),
          ],
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

    const genCountryItem = (item) =>
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
      );

    return h(VVirtualScroll, {
      props: { height: 420, "item-height": 60, items: this.filterCounties },
      scopedSlots: {
        default: ({ item }) => {
          return genCountryItem(item);
        },
      },
    });
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
