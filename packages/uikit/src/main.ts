import "@mdi/font/css/materialdesignicons.css";
import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify/lib";
import UIKit from "./index";

Vue.config.performance = true;

Vue.use(Vuetify);
Vue.use(UIKit);

const vuetify = new Vuetify(UIKit.preset);

Vue.use(UIKit.Toast, vuetify);
Vue.use(UIKit.Dialog, vuetify);

new Vue({
  vuetify,

  render(h) {
    return h(App);
  }
}).$mount("#app");
