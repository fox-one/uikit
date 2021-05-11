import "./FPhoneInput.scss";

import mixins from "vuetify/src/util/mixins";
import FNumberInput from "../FNumberInput";
import FCountryCodeSelect from "./FCountryCodeSelect.vue";

export default mixins(FNumberInput).extend({
  name: "FNumberInput",

  props: {
    code: { type: String, default: "" },
    precision: { type: Number, default: 0 },
    singleLine: { type: Boolean, default: true }
  },

  computed: {
    classes(): object {
      return {
        ...FNumberInput.options.computed.classes.call(this),
        "f-phone-input": true
      };
    }
  },

  methods: {
    genCountryCodeSelect() {
      return this.$createElement(FCountryCodeSelect, {
        props: { code: this.code },
        on: { input: (e) => this.$emit("update:code", e) }
      });
    },
    genPrependInnerSlot() {
      const slot: any[] = [this.genCountryCodeSelect()];

      return this.genSlot("prepend", "inner", slot);
    }
  }
});
