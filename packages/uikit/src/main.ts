import "@mdi/font/css/materialdesignicons.css";
import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify/lib";
import UIKit from "./index";

Vue.config.performance = true;

const vuetify = new Vuetify(UIKit.preset);

Vue.use(Vuetify);
Vue.use(UIKit, {
  vuetify,
  dialog: { top: false, centered: true },
  toast: { flat: true },
  auth: {
    wallets: ["fennec", "mixin", "links", "metamask", "walletconnect"],
    clientId: "0900a886-acde-4f7d-a77c-17d47c95fa7f",
    scope: "PROFILE:READ ASSETS:READ",
    pkce: true
  }
});

new Vue({
  vuetify,
  render(h) {
    return h(App);
  }
}).$mount("#app");
