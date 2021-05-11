import "@mdi/font/css/materialdesignicons.css";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./components";
import i18n from "./plugins/i18n";
import useUIKit from "./plugins/uikit";

Vue.config.productionTip = false;

const vuetify = useUIKit();

new Vue({
  router,
  store,
  i18n,
  vuetify,
  render: (h) => h(App)
} as any).$mount("#app");
