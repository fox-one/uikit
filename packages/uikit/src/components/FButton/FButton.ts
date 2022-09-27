import "./FButton.scss";

import { VBtn, VProgressCircular } from "vuetify/src/components";
import mixins from "vuetify/src/util/mixins";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const tinycolor = require("tinycolor2");

import type { VNode } from "vue";

export default mixins(VBtn).extend({
  name: "FButton",

  props: {
    rounded: { type: Boolean, default: true },
    ripple: { type: Boolean, default: false }
  },

  computed: {
    classes(): object {
      return {
        "f-btn": true,
        "f-button--light": this.isLight,
        ...VBtn.options.computed.classes.call(this)
      };
    },

    isLight(): boolean {
      const color = (this.$vuetify as any).theme.currentTheme[this.color];
      let isLight = false;

      if (color) {
        const luminance = tinycolor(color).getLuminance();

        isLight = luminance > 0.6;
      }

      return isLight;
    },

    isElevated(): boolean {
      return Boolean(this.fab || this.elevation);
    }
  },

  methods: {
    genLoader(): VNode {
      return this.$createElement(
        "span",
        {
          class: "v-btn__loader"
        },
        this.$slots.loader || [
          this.$createElement(VProgressCircular, {
            props: {
              indeterminate: true,
              size: 16,
              width: 2
            }
          })
        ]
      );
    }
  }
});
