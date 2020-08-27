import { VueConstructor } from "vue";
import * as components from "./components";

export default function (Vue: VueConstructor) {
  for (const key in components) {
    const component = components[key];
    Vue.component(key, component as typeof Vue);
  }
}
