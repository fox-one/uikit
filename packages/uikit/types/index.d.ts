import Toast from "./utils/toast";
import Dialog from "./utils/dialog";

import type { VueConstructor } from "vue/types/umd";
import type { GlobalVuetifyPreset } from "vuetify/types/services/presets";

declare const _default: {
  install: (Vue: VueConstructor) => void;
  preset: GlobalVuetifyPreset;
  Toast: typeof Toast;
  Dialog: typeof Dialog;
};
export default _default;
