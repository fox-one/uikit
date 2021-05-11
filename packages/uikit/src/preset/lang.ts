import { en, ja, zhHans } from "vuetify/src/locale";
import {
  en as uikitEn,
  ja as uikitJa,
  zhHans as uikitZhHans
} from "../locales";

export default {
  locales: {
    en: { ...en, ...uikitEn },
    ja: { ...ja, ...uikitJa },
    zhHans: { ...zhHans, ...uikitZhHans }
  }
};
