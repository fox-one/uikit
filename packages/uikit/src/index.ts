import type { VueConstructor } from "vue/types/umd";

import * as components from "./components";
import preset from "./preset";

export { preset };

export default function (Vue: VueConstructor) {
  for (const key in components) {
    const component = components[key];

    Vue.component(key, component as typeof Vue);
  }
}
