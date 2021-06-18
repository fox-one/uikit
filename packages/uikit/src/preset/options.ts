import { GlobalVuetifyPreset } from "vuetify/types/services/presets";
import { en, ja, zhHans } from "vuetify/lib/locale";
import {
  en as uikitEn,
  ja as uikitJa,
  zhHans as uikitZhHans
} from "../locales";

const preset: GlobalVuetifyPreset = {
  lang: {
    locales: {
      en: { ...en, ...uikitEn },
      ja: { ...ja, ...uikitJa },
      zhHans: { ...zhHans, ...uikitZhHans }
    }
  },
  theme: {
    themes: {
      light: {
        primary: "#1ea0ff",
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
        green: "#00D1C5",
        red: "#F44C4C"
      },

      dark: {
        primary: "#4bb3ff",
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
        green: "#33DAD1",
        red: "#F67070"
      }
    }
  }
};

export default preset;
