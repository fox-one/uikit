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
          primary: "#1ea0ff",
          // legacy color names
          secondary: "#777777",
          accent: "#169CFE",
          minor: "#EDEDED",
          // greyscale
          greyscale_1: "#000000",
          greyscale_2: "#333333",
          greyscale_3: "#666666",
          greyscale_4: "#cccccc",
          greyscale_5: "#ebebeb",
          greyscale_6: "#f5f5f5",
          // error & warning
          error: "#f44c4c",
          success: "#00c7af",
          warning: "#FC8A22",
          // subject color
          ocean: "#1ea0ff",
          pink: "#ee4596",
          chives: "#00c7af",
          // general color
          yellow: "#fadf8b",
          purple: "#c699e6",
          blue: "#7cadfa",
          gray: "#b9b9bc",
          green: "#9ddc95",
          red: "#f39086",
        },
        dark: {
          primary: "#4bb3ff",
          // legacy color names
          secondary: "#6F767C",
          minor: "#4B4B4B",
          // greyscale
          greyscale_1: "#ffffff",
          greyscale_2: "#d2d3d3",
          greyscale_3: "#9b9c9d",
          greyscale_4: "#636466",
          greyscale_5: "#36383b",
          greyscale_6: "#191919",
          // error & warning
          error: "#f67070",
          success: "#33d2bf",
          warning: "#FC8A22",
          // subject color
          ocean: "#4bb3ff",
          pink: "#f16aab",
          chives: "#33d2bf",
          // general color
          yellow: "#d8ba44",
          purple: "#9d5bcb",
          blue: "#3476d6",
          gray: "#87868a",
          green: "#61b756",
          red: "#ce4d40",
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
