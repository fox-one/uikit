import Vue from "vue";
import Vuetify from "vuetify/lib";
import UIKit, { preset } from "@foxone/uikit";

Vue.use(UIKit);
Vue.use(Vuetify);

export default new Vuetify({ ...preset });
