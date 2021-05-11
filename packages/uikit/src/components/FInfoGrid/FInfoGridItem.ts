import "./FInfoGridItem.scss";

import mixins from "vuetify/src/util/mixins";

import { VIcon } from "vuetify/lib";
import FTooltip from "../FTooltip";
import Colorable from "vuetify/src/mixins/colorable";
import Themeable from "vuetify/src/mixins/themeable";

import type { VNodeData, VNode } from "vue/types/umd";

export default mixins(Themeable, Colorable).extend({
  name: "FInfoGridItem",

  props: {
    title: { type: [String, Object] },
    value: { type: [String, Object] },
    valueUnit: { type: [String, Object] },
    hint: { type: [String] },
    reverse: { type: Boolean, default: false }
  },

  computed: {
    classes(): object {
      return {
        ...this.themeClasses,
        "f-info-grid-item": true
      };
    }
  },

  methods: {
    genTitle() {
      const title = this.title;
      const hint = this.hint && this.genHint();

      return this.$createElement(
        "div",
        { staticClass: "f-info-grid-item__title" },
        [title, hint]
      );
    },
    genHint() {
      return this.$createElement(
        FTooltip,
        { scopedSlots: { activator: this.genHelpIcon } },
        this.hint
      );
    },
    genHelpIcon({ on }) {
      return this.$createElement(
        VIcon,
        { props: { size: 12 }, staticClass: "f-info-grid-item__hint", on },
        "$help"
      );
    },
    genValue() {
      const data: VNodeData = this.setTextColor(this.color, {
        staticClass: "f-info-grid-item__value"
      });

      return this.$createElement("div", data, [this.value]);
    },
    genUnit() {
      return this.$createElement(
        "div",
        { staticClass: "f-info-grid-item__unit" },
        this.valueUnit
      );
    },
    genContent() {
      return this.$createElement(
        "div",
        { staticClass: "f-info-grid-item__content" },
        [this.genValue(), this.genUnit()]
      );
    }
  },

  render(h): VNode {
    const data: VNodeData = { class: this.classes };

    if (this.$slots.default) {
      return h("div", data, this.$slots.default);
    }

    let children = [this.genTitle(), this.genContent()];

    if (this.reverse) {
      children = children.reverse();
    }

    return h("div", data, children);
  }
});
