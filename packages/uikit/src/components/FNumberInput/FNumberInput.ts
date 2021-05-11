import { toPrecision } from "@foxone/utils/number";

import mixins from "vuetify/src/util/mixins";

import FInput from "../FInput";

export default mixins(FInput).extend({
  name: "FNumberInput",

  props: {
    type: { type: String, default: "number" },
    precision: { type: Number, default: 8 }
  },

  computed: {
    classes(): object {
      return {
        ...FInput.options.computed.classes.call(this),
        "f-number-input": true
      };
    },
    internalValue: {
      get(): any {
        return this.lazyValue;
      },
      set(val: any) {
        let text = val;

        if (val !== "" && val !== "-0") {
          text = toPrecision({ n: val, dp: this.precision });
        }

        this.lazyValue = text;
        this.$emit("input", this.lazyValue);
      }
    }
  }
});
