import Vue from "vue";
import Vuetify from "vuetify/lib";
import UIKit from "@foxone/uikit";
import "@foxone/uikit/build/index.css";

export default function () {
  Vue.use(Vuetify);
  Vue.use(UIKit);

  const vuetify = new Vuetify(UIKit.preset);

  Vue.use(UIKit.Toast, vuetify);
  Vue.use(UIKit.Dialog, vuetify);

  return vuetify;
}
