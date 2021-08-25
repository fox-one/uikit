import "./FTooltip.scss";

import mixins from "vuetify/src/util/mixins";

import VTooltip from "vuetify/src/components/VTooltip";
import FTooltipArrow from "./FTooltipArrow.vue";
import Themeable from "vuetify/src/mixins/themeable";

import ClickOutside from "vuetify/src/directives/click-outside";

export default mixins(VTooltip, Themeable).extend({
  name: "FTooltip",

  directives: {
    ClickOutside
  },

  props: {
    openOnClick: { type: Boolean, default: true },
    openOnHover: { type: Boolean, default: false },
    openOnFocus: { type: Boolean, default: false },
    top: { type: Boolean, default: true }
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
    closeConditional(e: Event) {
      const target = e.target as HTMLElement;

      return (
        this.isActive &&
        !this._isDestroyed &&
        !this.$refs.content.contains(target)
      );
    },
    genArrow() {
      const h = this.$createElement;

      return h(
        "span",
        { staticClass: "f-tooltip__arrow", style: this.arrowStyles },
        [h(FTooltipArrow)]
      );
    },
    genContent() {
      const render = VTooltip.options.methods.genContent.call(this);
      const children = render.children || [];
      const data = render.data || {};

      render.children = [...children, this.genArrow()];
      render.data = {
        ...data,
        directives: [
          ...(data.directives || []),
          {
            name: "click-outside",
            value: {
              handler: () => {
                this.isActive = false;
              },
              closeConditional: this.closeConditional,
              include: () => [this.$el, ...this.getOpenDependentElements()]
            }
          }
        ],
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
