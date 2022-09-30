import * as components from "./components";
import preset from "./preset";
import Toast from "./services/toast";
import Dialog from "./services/dialog";
import Auth from "./services/auth";
import Payment from "./services/payment";

import "./styles/index.scss";

import type { VueConstructor } from "vue/types/umd";

function install(Vue: VueConstructor, options) {
  for (const key in components) {
    const component = components[key];

    Vue.component(key, component as typeof Vue);
  }

  Dialog.install(Vue, options.vuetify, options.dialog);
  Toast.install(Vue, options.vuetify, options.toast);
  Auth.install(Vue, options.vuetify, options.auth);
  Payment.install(Vue, options.vuetify);
}

export default install;

export { preset };
