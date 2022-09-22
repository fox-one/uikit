import type { VueConstructor } from "vue/types/umd";
import type Vuetify from "vuetify/lib";

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

declare function Payment(): void;
declare namespace Payment {
  let install: (
    Vue: VueConstructor<import("vue/types/umd")>,
    vuetify: Vuetify
  ) => void;
}
export default Payment;

export type PaymentMethods = {
  show: (options?: PaymentOptions) => Promise<void>;
  mixin: (options?: MixinPaymentOptions) => Promise<void>;
};
