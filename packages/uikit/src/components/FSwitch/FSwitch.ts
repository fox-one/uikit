import "./FSwitch.scss";

import mixins from "vuetify/src/util/mixins";

import { VSwitch } from "vuetify/src/components";

export default mixins(VSwitch).extend({
  name: "FSwitch",

  props: {
    inset: { type: Boolean, default: true },
    color: { type: String, default: "greyscale_1" }
  },

  computed: {
    computedColor(): string | undefined {
      if (this.color) return this.color;
      if (this.isDark && !this.appIsDark) return "white";

      return "primary";
    },
    classes(): object {
      return {
        ...VSwitch.options.computed.classes.call(this),
        "f-input--switch": true
      };
    }
  }
});
