import "./FTip.scss";

import mixins from "vuetify/src/util/mixins";

import Themeable from "vuetify/src/mixins/themeable";
import Toggleable from "vuetify/src/mixins/toggleable";
import { VIcon, VBtn } from "vuetify/lib";

import type { VNode } from "vue/types/umd";

export default mixins(Themeable, Toggleable).extend({
  name: "FTip",

  props: {
    type: { type: String, default: "info" },
    value: { type: Boolean, default: true },
    closeable: { type: Boolean, default: true },
    closeProps: { type: Object, defautl: () => ({}) },
    transition: {
      type: [String, Boolean],
      default: "dialog-transition"
    },
    origin: {
      type: String,
      default: "center center"
    }
  },

  data() {
    return {
      isActive: !!this.value
    };
  },

  computed: {
    classes(): object {
      return {
        ...this.themeClasses,
        "f-tip": true,
        [`f-tip--${this.type}`]: true
      };
    }
  },

  methods: {
    genIcon(): any {
      const h = this.$createElement;

      if (!this.closeable) return null;

      return h(
        VBtn,
        {
          staticClass: "f-tip__close",
          props: {
            width: 12,
            height: 12,
            fab: true,
            dark: true
          },
          on: {
            click: () => (this.isActive = false)
          }
        },
        [h(VIcon, { props: { size: 12 } }, "$close")]
      );
    },
    genContent() {
      return this.$createElement(
        "div",
        {
          class: [this.classes],
          directives: [{ name: "show", value: this.isActive }]
        },
        [this.genIcon(), this.$slots.default]
      );
    },
    genTransition() {
      const content = this.genContent();

      if (!this.transition) return content;

      return this.$createElement(
        "transition",
        {
          props: {
            name: this.transition,
            origin: this.origin,
            appear: true
          }
        },
        [content]
      );
    }
  },

  render(): VNode {
    return this.genTransition();
  }
});
