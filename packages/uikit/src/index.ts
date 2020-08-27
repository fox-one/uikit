import { VueConstructor } from "vue";
import * as components from "./components";

export default function (Vue: VueConstructor) {
  for (const key in components) {
    console.log(key);
    const component = components[key];
    Vue.component(key, component as typeof Vue);
  }
}
