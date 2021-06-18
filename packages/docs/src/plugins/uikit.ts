import Vue from "vue";
import Vuetify from "vuetify/lib";
import UIKit from "@foxone/uikit";
import "@foxone/uikit/build/index.css";

export default function () {
  Vue.use(Vuetify, { components: UIKit.preset.components });
  Vue.use(UIKit);

  return new Vuetify(UIKit.preset.options);
}
