import Vue from "vue";
import App from "./App.vue";

import router from "./router";
import store from "./store";
import useUIKit from "./plugins/uikit";

Vue.config.productionTip = false;

const vuetify = useUIKit();

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount("#app");
