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
        // greyscale
        greyscale_1: "#000000",
        greyscale_2: "#494949",
        greyscale_3: "#808080",
        greyscale_4: "#CCCCCC",
        greyscale_5: "#EBEBEB",
        greyscale_6: "#F5F5F5",
        greyscale_7: "#FFFFFF",
        // error & warning
        error: "#f44c4c",
        success: "#00c7af",
        warning: "#FC8A22"
      },

      dark: {
        // greyscale
        greyscale_1: "#ffffff",
        greyscale_2: "#D8D8D8",
        greyscale_3: "#9F9F9F",
        greyscale_4: "#656565",
        greyscale_5: "#3C3C3C",
        greyscale_6: "#191919",
        greyscale_7: "#000000",
        // error & warning
        error: "#f67070",
        success: "#33d2bf",
        warning: "#FC8A22"
      }
    }
  }
};

export default preset;
