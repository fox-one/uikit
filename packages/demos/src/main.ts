import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/foxoneUI";
import "./components";
import i18n from "./plugins/i18n";
import useVuetify from "./plugins/vuetify";

import "animate.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  vuetify: useVuetify(store),
  render: (h) => h(App),
}).$mount("#app");
