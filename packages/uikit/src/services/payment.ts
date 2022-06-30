import Vue from "vue";
import FPaymentModal from "../components/FPaymentModal";

import type { VueConstructor } from "vue/types/umd";
import type Fennec from "@foxone/fennec-dapp";
import type Vuetify from "vuetify/lib";

export interface PaymentOptions {
  url?: string;
  code?: string;
  multisig?: boolean;
  fennec?: Fennec;
  data?: {
    recipient: string;
    assetId: string;
    amount: string;
    traceId: string;
    memo: string;
  };
  info?: {
    symbol: string;
    logo: string;
    amount: string;
  };
  checker: () => Promise<any>;
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
      instance.show(options);

      return;
    }

    instance = create();
    instance.show(options);
    instance.$on("close", close);
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
