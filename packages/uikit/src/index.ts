import "./styles/index.scss";
import { VueConstructor } from "vue/types/umd";
import createVuetify from "./create";
import * as components from "./components";

export * from "./components";
export { createVuetify };

export default function (Vue: VueConstructor) {
  for (const key in components) {
    const component = components[key];

    Vue.component(key, component as typeof Vue);
  }
}
