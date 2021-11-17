import { en, ja, ko, de, fr, es, zhHans } from "vuetify/src/locale";
import { mergeDeep } from "vuetify/lib/util/helpers";
import locales from "../locales";

const base = {
  en,
  ja,
  zh: zhHans,
  ko,
  de,
  fr,
  es
};

export default mergeDeep(base, locales);
