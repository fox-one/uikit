import Vue from "vue";

// types
import type { VNode } from "vue";

export default Vue.extend({
  name: "FBottomSheetSubTitle",

  computed: {
    classes(): object {
      return { "f-bottom-sheet__subtitle": true };
    }
  },

  render(h): VNode {
    return h("div", { class: this.classes }, this.$slots.default);
  }
});
