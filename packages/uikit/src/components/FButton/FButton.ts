import "./FButton.scss";

import { VBtn, VProgressCircular } from "vuetify/lib";
import { Component, Prop, Mixins } from "vue-property-decorator";

import type { VNode } from "vue";

@Component
class FButton extends Mixins(VBtn) {
  @Prop({ type: Boolean, default: true })
  rounded!: boolean;

  @Prop({ type: Boolean, default: false })
  ripple!: boolean;

  declare fab: boolean;

  declare elevation: string | number;

  get classes() {
    return {
      "f-btn": true,
      ...VBtn.options.computed.classes.call(this)
    };
  }

  get isElevated() {
    return this.fab || this.elevation;
  }

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

export default FButton;
