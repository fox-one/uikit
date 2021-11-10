import { en, ja, ko, de, fr, es, zhHans } from "vuetify/src/locale";
import {
  en as uikitEn,
  ja as uikitJa,
  zhHans as uikitZhHans
} from "../locales";

export default {
  locales: {
    en: { ...en, ...uikitEn },
    ja: { ...ja, ...uikitJa },
    zh: { ...zhHans, ...uikitZhHans },
    ko,
    de,
    fr,
    es
  }
};
