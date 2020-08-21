import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/foxoneUI";
import "./components";
import useVuetify from "./plugins/vuetify";

import "animate.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify: useVuetify(store),
  render: (h) => h(App),
}).$mount("#app");
