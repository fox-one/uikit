import "./FTooltip.scss";

import Vue from "vue";
import mixins from "vuetify/src/util/mixins";

import VTooltip from "vuetify/src/components/VTooltip";
import Themeable from "vuetify/src/mixins/themeable";

const Arrow = Vue.extend({
  template: `<svg width="23" height="12" viewBox="0 0 23 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M10.1984 1.11564C10.9474 0.47366 12.0526 0.47366 12.8016 1.11564L21.3951 8.4815C22.8049 9.6899 21.9503 12 20.0935 12H2.90652C1.0497 12 0.195138 9.6899 1.60493 8.4815L10.1984 1.11564Z"
    fill="currentColor" />
</svg>`
});

export default mixins(VTooltip, Themeable).extend({
  name: "FTooltip",

  props: {
    openOnClick: { type: Boolean, default: true },
    openOnHover: { type: Boolean, default: false },
    openOnFocus: { type: Boolean, default: false }
  },

  computed: {
    classes(): object {
      return {
        ...VTooltip.options.computed.classes.call(this),
        "f-tooltip": true
      };
    },
    arrowStyles() {
      const styles: any = {};
      const { left: cl, top: ct } = this.dimensions.content;
      const {
        height: ah,
        left: al,
        top: at,
        width: aw
      } = this.dimensions.activator;

      const left = Math.floor(al + aw / 2 - cl - 12);
      const top = Math.floor(at + ah / 2 - ct - 4);

      if (this.top) {
        styles.bottom = "-6px";
        styles.left = left + "px";
        styles.transform = "rotate(180deg)";
      } else if (this.bottom) {
        styles.top = "-6px";
        styles.left = left + "px";
      } else if (this.left) {
        styles.right = "-12px";
        styles.top = top + "px";
        styles.transform = "rotate(90deg)";
      } else {
        styles.left = "-12px";
        styles.top = top + "px";
        styles.transform = "rotate(-90deg)";
      }

      return styles;
    }
  },

  watch: {
    isActive: "updateDimensions"
  },

  methods: {
    genArrow() {
      const h = this.$createElement;

      return h(
        "span",
        { staticClass: "f-tooltip__arrow", style: this.arrowStyles },
        [h(Arrow)]
      );
    },
    genContent() {
      const render = VTooltip.options.methods.genContent.call(this);
      const children = render.children || [];
      const data = render.data || {};

      render.children = [...children, this.genArrow()];
      render.data = {
        ...data,
        class: {
          ...data.class,
          ...this.themeClasses,
          "f-tooltip__content": true
        }
      };

      return render;
    }
  }
});
