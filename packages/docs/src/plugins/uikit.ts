import Vue from "vue";
import Vuetify from "vuetify/lib";
import UIKit from "@foxone/uikit/build/index.js";
import * as icons from "@foxone/icons";
import { mdiBrightness4 } from "@mdi/js";

import "@foxone/uikit/build/index.css";

export default function () {
  const options = UIKit.preset;

  options.icons!.values = {
    ...options.icons!.values,
    mdiBrightness4,
    ...Object.keys(icons).reduce((m, k) => {
      m[k] = { component: icons[k] };

      return m;
    }, {})
  };

  const vuetify = new Vuetify(UIKit.preset);

  Vue.use(Vuetify);
  Vue.use(UIKit);
  Vue.use(UIKit.Toast, vuetify);
  Vue.use(UIKit.Dialog, vuetify);

  return vuetify;
}
