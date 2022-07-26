import { ToastMethods } from "./utils/toast";
import { DialogMethods } from "./utils/dialog";
import { AuthMethods, FAuthMethodModalProps } from "./utils/auth";
import { PaymentMethods } from "./utils/payment";

import type Vuetify from "vuetify/lib";
import type { VueConstructor } from "vue/types/umd";
import type { GlobalVuetifyPreset } from "vuetify/types/services/presets";

export type UIKitOptions = {
  vuetify: Vuetify;
  dialog?: Record<string, string>;
  toast?: Record<string, string>;
  auth?: FAuthMethodModalProps;
};

declare const _default: {
  install: (Vue: VueConstructor, options: UIKitOptions) => void;
  preset: GlobalVuetifyPreset;
};
export default _default;

declare module "vue/types/vue" {
  interface Vue {
    $uikit: {
      dialog: DialogMethods;
      toast: ToastMethods;
      auth: AuthMethods;
      payment: PaymentMethods;
    };
  }
}
