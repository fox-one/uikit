// Imports
import Vue from "vue";
import VueI18n from "vue-i18n";

// Messages
import en from "./messages/en.json";
import zh from "./messages/zh.json";

Vue.use(VueI18n);

export default new VueI18n({
  locale: "en",
  fallbackLocale: "en",
  messages: { en, zh }
});
