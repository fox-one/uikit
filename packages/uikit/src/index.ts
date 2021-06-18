import "./styles/index.scss";
import * as components from "./components";
import preset from "./preset";

import type { VueConstructor } from "vue/types/umd";

export default {
  install: function (Vue: VueConstructor) {
    for (const key in components) {
      const component = components[key];

      Vue.component(key, component as typeof Vue);
    }
  },

  preset
};
