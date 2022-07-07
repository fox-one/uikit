import type { VueConstructor } from "vue/types/umd";
import type Vuetify from "vuetify/lib";
import type { FAuthMethodModalProps } from "./auth";

export interface PassportOptions {
  origin: string;
  getTokenByCode?: (code: string) => Promise<string>;
}

export interface PaymentPayload {
  // transfer params
  recipient?: string;
  assetId: string;
  amount: string;
  traceId?: string;
  memo?: string;
  // multisig params
  code?: string;
  multisig?: boolean;
  // common params
  info: {
    symbol: string;
    logo: string;
    amount: string;
  };
  checker?: () => Promise<boolean>;
}

export interface AuthData {
  token: string;
  channel: string;
}

export interface PassportPayload {
  vuetify: Vuetify;
  options: PassportOptions;
  authModalProps: FAuthMethodModalProps;
}

declare function Passport(): void;
declare namespace Passport {
  let install: (
    Vue: VueConstructor<import("vue/types/umd")>,
    payload: PassportPayload
  ) => void;
}
export default Auth;

export type PassportMethods = {
  auth: () => Promise<AuthData>;
  payment: (payload: PaymentPayload) => Promise<void>;
  getBalance: (assetId: string) => Promise<string>;
  sync: (payload: AuthData) => Promise<AuthData>;
};
