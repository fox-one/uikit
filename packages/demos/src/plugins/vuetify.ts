import Vue from "vue";
import Vuetify from "vuetify/lib";
import Uikit from "@foxone/uikit";

import zh from "vuetify/es5/locale/zh-Hans";
import en from "vuetify/es5/locale/en";
import ja from "vuetify/es5/locale/ja";
import enUikit from "@foxone/uikit/src/locales/en";
import jaUikit from "@foxone/uikit/src/locales/ja";
import zhUikit from "@foxone/uikit/src/locales/zh-Hans";

Vue.use(Vuetify);
Vue.use(Uikit);

export default function(store) {
  const isDark = store.state.app?.dark || false;

  return new Vuetify({
    icons: {},
    theme: {
      dark: isDark,
      options: {
        customProperties: true,
      },
    },
    lang: {
      locales: {
        zh: {
          ...zh,
          ...zhUikit,
        },
        en: {
          ...en,
          ...enUikit,
        },
        ja: {
          ...ja,
          ...jaUikit,
        },
      },
    },
  });
}
