import "./FButton.scss";

import { VBtn, VProgressCircular } from "vuetify/src/components";
import mixins from "vuetify/src/util/mixins";

import type { VNode } from "vue";

export default mixins(VBtn).extend({
  props: {
    rounded: { type: Boolean, default: true },
    ripple: { type: Boolean, default: false }
  },

  computed: {
    classes() {
      return { "f-btn": true, ...VBtn.options.computed.classes.call(this) };
    },

    isElevated() {
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
