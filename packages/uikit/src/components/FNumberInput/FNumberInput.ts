import { toPrecision } from "@foxone/utils/number";
import BigNumber from "bignumber.js";

import mixins from "vuetify/src/util/mixins";

import FInput from "../FInput";

export default mixins(FInput).extend({
  name: "FNumberInput",

  props: {
    type: { type: String, default: "number" },
    precision: { type: [Number, String], default: 8 },
    precisionDisabled: { type: Boolean, default: false }
  },

  computed: {
    classes(): object {
      return {
        ...FInput.options.computed.classes.call(this),
        "f-number-input": true
      };
    },
    internalValue: {
      get(): string {
        return this.lazyValue;
      },
      set(value: string) {
        let text = value;

        if (!this.precisionDisabled) {
          const dp = new BigNumber(text).decimalPlaces();

          if (dp > +this.precision) {
            text = toPrecision({ n: text, dp: +this.precision });
          }
        }

        this.lazyValue = text;
        this.$emit("input", this.lazyValue);
        this.$forceUpdate();
      }
    }
  }
});
