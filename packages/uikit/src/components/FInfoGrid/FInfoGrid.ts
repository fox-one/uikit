import "./FInfoGrid.scss";

import Vue from "vue";

export default Vue.extend({
  name: "FInfoGrid",

  render(h) {
    return h("div", { staticClass: "f-info-grid" }, this.$slots.default);
  }
});
