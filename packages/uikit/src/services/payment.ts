import Vue from "vue";
import FPaymentModal from "../components/FPaymentModal";

import type { VueConstructor } from "vue/types/umd";
import type Vuetify from "vuetify/lib";

export interface PaymentOptions {
  scheme: string;
  channel: "mixin" | "fennec" | "mvm";
  actions: {
    mixin: () => Promise<boolean>;
    fennec: () => Promise<boolean>;
    mvm: () => Promise<boolean>;
  };
  info: {
    symbol: string;
    logo: string;
    amount: string;
  };
  checker: () => Promise<boolean>;
}

const FPaymentModalConstructor = Vue.extend(FPaymentModal);

function install(Vue: VueConstructor, vuetify: Vuetify) {
  let instance: any = null;

  const create = () => {
    const instance = new FPaymentModalConstructor();
    const app = document.querySelector("[data-app]");

    instance.$vuetify = vuetify.framework;
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

  Vue.prototype.$uikit = Vue.prototype.$uikit || {};
  Vue.prototype.$uikit.payment = { show };
}

function Payment() {}

Payment.install = install;

export default Payment;
