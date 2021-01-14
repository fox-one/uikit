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
      themes: {
        light: {
          primary: "#1EA0FF",
          // legacy color names
          secondary: "#777777",
          accent: "#169CFE",
          minor: "#EDEDED",
          // greyscale
          greyscale_1: "#000000",
          greyscale_2: "#494949",
          greyscale_3: "#777777",
          greyscale_4: "#D6D6D6",
          greyscale_5: "#F3F3F3",
          // error & warning
          error: "#E24444",
          warning: "#FC8A22",
          // theme color
          pink: "EF5EA3",
          chives: "00CEB7",
          fox: "F08C40",
        },
        dark: {
          primary: "#1EA0FF",
          // legacy color names
          secondary: "#6F767C",
          minor: "#4B4B4B",
          // greyscale
          greyscale_1: "#FFFFFF",
          greyscale_2: "#D3D3D3",
          greyscale_3: "#696C6F",
          greyscale_4: "#404143",
          greyscale_5: "#27292B",
          // error & warning
          error: "#E24444",
          warning: "#FC8A22",
          // theme color
          pink: "EF5EA3",
          chives: "00CEB7",
          fox: "F08C40",
        },
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
