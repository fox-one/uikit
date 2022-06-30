import type { VueConstructor } from "vue/types/umd";
import type Vuetify from "vuetify/lib";

export interface AuthOptions {
  checkFennec?: () => boolean;
  handleSuccess?: (...args: any) => void;
  handleError?: (...args: any) => void;
}
declare function Auth(): void;
declare namespace Auth {
  let install: (
    Vue: VueConstructor<import("vue/types/umd")>,
    vuetify: Vuetify
  ) => void;
}
export default Auth;

export type Keys = "show";

export type AuthMethods = Record<Keys, (options?: AuthOptions) => void>;
