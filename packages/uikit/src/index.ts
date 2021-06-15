import "./styles/index.scss";
import preset from "./preset";
import * as components from "./components";
import Vuetify, {
  VApp,
  VBtn,
  VCard,
  VCardText,
  VCol,
  VContainer,
  VMain,
  VDialog,
  VDivider,
  VIcon,
  VImg,
  VList,
  VListItem,
  VListItemAvatar,
  VListItemContent,
  VListItemIcon,
  VListItemTitle,
  VNavigationDrawer,
  VRow,
  VSheet,
  VSnackbar,
  VSparkline,
  VToolbar,
  VLayout,
  VTooltip,
  VResponsive,
  VLazy,
  VThemeProvider
} from "vuetify/lib";

import type { VueConstructor } from "vue/types/umd";
import type { UserVuetifyPreset } from "vuetify/types/services/presets";
import Vue from "vue";

export default function (Vue: VueConstructor) {
  for (const key in components) {
    const component = components[key];

    Vue.component(key, component as typeof Vue);
  }
}

export function useVuetify(options: UserVuetifyPreset = {}) {
  Vue.use(Vuetify, {
    components: {
      VApp,
      VBtn,
      VCard,
      VCardText,
      VCol,
      VContainer,
      VMain,
      VDialog,
      VDivider,
      VIcon,
      VImg,
      VList,
      VListItem,
      VListItemAvatar,
      VListItemContent,
      VListItemIcon,
      VListItemTitle,
      VNavigationDrawer,
      VRow,
      VSheet,
      VSnackbar,
      VSparkline,
      VToolbar,
      VLayout,
      VTooltip,
      VResponsive,
      VLazy,
      VThemeProvider
    }
  });

  return new Vuetify({ preset, ...options });
}
