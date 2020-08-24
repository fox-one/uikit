import Vue from "vue";
import Vuetify from "vuetify/lib";
import zhHans from "vuetify/es5/locale/zh-Hans";
import en from "vuetify/es5/locale/en";
import ja from "vuetify/es5/locale/ja";
import uikit_en from "@foxone/uikit/src/locales/en";
import uikit_ja from "@foxone/uikit/src/locales/ja";
import uikit_zhHans from "@foxone/uikit/src/locales/zh-Hans";

Vue.use(Vuetify);

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
          ...zhHans,
          ...uikit_zhHans,
        },
        en: {
          ...en,
          ...uikit_en,
        },
        ja: {
          ...ja,
          ...uikit_ja,
        },
      },
    },
  });
}
