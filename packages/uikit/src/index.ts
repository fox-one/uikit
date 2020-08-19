import { VueConstructor } from "vue";
import * as components from "./components";

export default function (Vue: VueConstructor) {
  // Vue.component(FAppBottomNav.name, FAppBottomNav);
  // Vue.component(FPanel.name, FPanel);
  for (const key in components) {
    const component = components[key];
    Vue.component(key, component as typeof Vue);
  }
}
