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

export interface AuthOptions {
  checkFennec?: () => boolean;
  handleAuth?: (...args: any) => void;
  handleError?: (...args: any) => void;
}
declare function Auth(): void;
declare namespace Auth {
  let install: (
    Vue: VueConstructor<import("vue/types/umd")>,
    vuetify: Vuetify,
    globalProps: FAuthMethodModalProps
  ) => void;
}
export default Auth;

export type Keys = "show";

export type AuthMethods = Record<Keys, (options?: AuthOptions) => void>;
