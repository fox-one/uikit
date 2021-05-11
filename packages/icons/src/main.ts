import Vue from "vue";
import App from "./App.vue";
import useUIKit from "./plugins/uikit";

Vue.config.productionTip = false;

const vuetify = useUIKit();

new Vue({
  vuetify,
  render: (h) => h(App)
}).$mount("#app");
