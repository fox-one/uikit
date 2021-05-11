import "@mdi/font/css/materialdesignicons.css";

import Vue from "vue";
import App from "./App.vue";

import router from "./router";
import store from "./store";
import i18n from "./i18n";
import useUIKit from "./plugins/uikit";
import usePlugins from "./plugins";

Vue.config.productionTip = false;

usePlugins(Vue);
const vuetify = useUIKit();

new Vue({
  router,
  store,
  i18n,
  vuetify,
  render: (h) => h(App)
}).$mount("#app");
