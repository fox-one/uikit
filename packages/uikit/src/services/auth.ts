import Vue from "vue";
import FAuthMethodModal from "../components/FAuthMethodModal";

import type { VueConstructor } from "vue/types/umd";
import type Vuetify from "vuetify/lib";

export interface FAuthMethodModalProps {
  wallets?: string[];
  // Mixin oauth params
  clientId?: string;
  scope?: string;
  isFiresbox?: boolean;
  pkce?: boolean;
  hosts?: string[];
}

export interface FAuthMethodModalOptions {
  checkFennec?: () => boolean;
  checkMetamask?: () => boolean;
  handleAuth?: (...args: any) => void;
  handleError?: (...args: any) => void;
}

const FAuthMethodModalConstructor = Vue.extend(FAuthMethodModal);

function install(
  Vue: VueConstructor,
  vuetify: (() => Vuetify) | Vuetify,
  globalProps: FAuthMethodModalProps = {}
) {
  let instance: any = null;
  const _vuetify = typeof vuetify === "function" ? vuetify() : vuetify;

  const create = (options: FAuthMethodModalOptions) => {
    const instance = new FAuthMethodModalConstructor();
    const app = document.querySelector("[data-app]");

    Object.assign(instance, {
      ...globalProps,
      fennec: options?.checkFennec?.(),
      metamask: options?.checkMetamask?.()
    });
    instance.$vuetify = _vuetify.framework;
    app?.appendChild(instance.$mount().$el);

    return instance;
  };

  const show = (options: FAuthMethodModalOptions = {}) => {
    if (instance) return;

    instance = create(options);
    instance.show();
    instance.$on("close", () => {
      close();
    });
    instance.$on("auth", options.handleAuth);
    instance.$on("error", options.handleError);
  };

  const close = () => {
    instance.$nextTick(() => {
      instance.$destroy();
      instance.$el.parentNode.removeChild(instance.$el);
      instance = null;
    });
  };

  Vue.prototype.$uikit = Vue.prototype.$uikit || {};
  Vue.prototype.$uikit.auth = { show };
}

function Auth() {}

Auth.install = install;

export default Auth;
