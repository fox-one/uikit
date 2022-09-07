import Vue from "vue";
import FPaymentModal from "../components/FPaymentModal";

import type { VueConstructor } from "vue/types/umd";
import type Vuetify from "vuetify/lib";
import { genPaymentUrl } from "@foxone/utils/mixin";

export interface PaymentOptions {
  assetId: string;
  amount: string;
  scheme: string;
  channel: "mixin" | "fennec" | "metamask" | "walletconnect";
  hideCheckingModal?: boolean;
  actions: {
    mixin?: () => void;
    fennec?: () => Promise<boolean>;
    mvm?: () => Promise<boolean>;
  };
  checker: () => Promise<boolean>;
}

export interface MixinPaymentOptions {
  assetId: string;
  amount: string;
  recipient: string;
  traceId: string;
  memo: string;
  hideCheckingModal?: boolean;
  checker: () => Promise<boolean>;
}

const FPaymentModalConstructor = Vue.extend(FPaymentModal);

function install(Vue: VueConstructor, vuetify: (() => Vuetify) | Vuetify) {
  let instance: any = null;
  const _vuetify = typeof vuetify === "function" ? vuetify() : vuetify;

  const create = () => {
    const instance = new FPaymentModalConstructor();
    const app = document.querySelector("[data-app]");

    instance.$vuetify = _vuetify.framework;
    app?.appendChild(instance.$mount().$el);

    return instance;
  };

  const show = (options: PaymentOptions) => {
    if (instance) {
      return instance.show(options);
    }

    instance = create();
    instance.$on("close", close);

    return instance.show(options);
  };

  const close = () => {
    instance.$nextTick(() => {
      instance.$destroy();
      instance.$el.parentNode.removeChild(instance.$el);
      instance = null;
    });
  };

  const mixin = (options: MixinPaymentOptions) => {
    const scheme = genPaymentUrl(options);

    return show({
      ...options,
      channel: "mixin",
      scheme,
      actions: { mixin: () => (window.location.href = scheme) }
    });
  };

  Vue.prototype.$uikit = Vue.prototype.$uikit || {};
  Vue.prototype.$uikit.payment = { show, mixin };
}

function Payment() {}

Payment.install = install;

export default Payment;
