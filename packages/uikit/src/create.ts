import type { UserVuetifyPreset } from "vuetify/types/services/presets";

import Vuetify from "vuetify";
import preset from "./preset";

export default function (opts: UserVuetifyPreset) {
  return new Vuetify({ preset, ...opts });
}
