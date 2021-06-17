import Vue from "vue";
import UIkit, { useVuetify } from "@foxone/uikit";

export default function () {
  Vue.use(UIkit);

  return useVuetify();
}
