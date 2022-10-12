import * as components from "./components";

import preset from "./preset";
import Toast, { ToastOptions } from "./services/toast";
import Dialog, { DialogOptions } from "./services/dialog";
import Auth, { FAuthMethodModalProps } from "./services/auth";
import Payment from "./services/payment";

import "./styles/index.scss";

import type { VueConstructor } from "vue";
import type Vuetify from "vuetify/lib";

export type Options = {
  vuetify?: Vuetify;
  dialog?: DialogOptions;
  toast?: ToastOptions;
  auth?: FAuthMethodModalProps;
};

function install(Vue: VueConstructor, options: Options = {}) {
  for (const key in components) {
    const component = components[key];

    Vue.component(key, component);
  }

  if (options.vuetify) {
    Dialog.install(Vue, options.vuetify, options.dialog);
    Toast.install(Vue, options.vuetify, options.toast);
    Auth.install(Vue, options.vuetify, options.auth);
    Payment.install(Vue, options.vuetify);
  }
}

export default install;

export { preset };
