import type { VueConstructor } from "vue/types/umd";
import type Vuetify from "vuetify/lib";

export interface PaymentOptions {
  scheme: string;
  channel: "mixin" | "fennec" | "metamask" | "walletconnect";
  hideCheckingModal?: boolean;
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
declare function Payment(): void;
declare namespace Payment {
  let install: (
    Vue: VueConstructor<import("vue/types/umd")>,
    vuetify: Vuetify
  ) => void;
}
export default Payment;

export type Keys = "show";

export type PaymentMethods = Record<Keys, (options?: PaymentOptions) => void>;
