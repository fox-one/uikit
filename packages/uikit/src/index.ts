import * as components from "./components";
import preset from "./preset";
import Toast from "./services/toast";
import Dialog from "./services/dialog";
import Auth from "./services/auth";
import Payment from "./services/payment";

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
  Dialog,
  Auth,
  Payment
};
