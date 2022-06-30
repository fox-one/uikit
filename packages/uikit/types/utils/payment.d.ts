import type { VueConstructor } from "vue/types/umd";
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
