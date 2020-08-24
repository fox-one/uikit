import Vue from "vue";
import Vuetify from "vuetify/lib";
import foxoneUI from "@foxone/uikit";

import zh from "vuetify/es5/locale/zh-Hans";
import en from "vuetify/es5/locale/en";
import ja from "vuetify/es5/locale/ja";
import en_uikit from "@foxone/uikit/src/locales/en";
import ja_uikit from "@foxone/uikit/src/locales/ja";
import zh_uikit from "@foxone/uikit/src/locales/zh-Hans";

Vue.use(Vuetify);
Vue.use(foxoneUI);

export default function(store) {
  const isDark = store.state.app?.dark || false;

  return new Vuetify({
    icons: {},
    theme: {
      dark: isDark,
    },
    lang: {
      locales: {
        zh: {
          ...zh,
          ...zh_uikit,
        },
        en: {
          ...en,
          ...en_uikit,
        },
        ja: {
          ...ja,
          ...ja_uikit,
        },
      },
    },
  });
}
