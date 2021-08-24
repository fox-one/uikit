import Toast, { ToastMethods } from "./utils/toast";
import Dialog, { DialogMethods } from "./utils/dialog";

import type { VueConstructor } from "vue/types/umd";
import type { GlobalVuetifyPreset } from "vuetify/types/services/presets";

declare const _default: {
  install: (Vue: VueConstructor) => void;
  preset: GlobalVuetifyPreset;
  Toast: typeof Toast;
  Dialog: typeof Dialog;
};
export default _default;

declare module "vue/types/vue" {
  interface Vue {
    $uikit: { dialog: DialogMethods; toast: ToastMethods };
  }
}
