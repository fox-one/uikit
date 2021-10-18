import * as components from "./components";
import preset from "./preset";
import Toast from "./utils/toast";
import Dialog from "./utils/dialog";

import "./styles/index.scss";

import type { VueConstructor } from "vue/types/umd";

export default {
  install: function (Vue: VueConstructor) {
    for (const key in components) {
      const component = components[key];

      Vue.component(key, component as typeof Vue);
    }
  },

  preset,
  Toast,
  Dialog
};
