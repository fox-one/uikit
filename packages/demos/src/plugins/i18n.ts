import Vue from "vue";
import VueI18n from "vue-i18n";
import en from "@/locales/en.json";
import zh from "@/locales/zh.json";
import ja from "@/locales/ja.json";

Vue.use(VueI18n);

const messages = {
  en,
  zh,
  ja
};

export default new VueI18n({
  fallbackLocale: "en",
  locale: "en",
  messages
});
