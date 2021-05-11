import "./FSlider.scss";

import mixins from "vuetify/src/util/mixins";

import { VSlider } from "vuetify/src/components";

export default mixins(VSlider).extend({
  name: "FSlider",

  props: {
    color: { type: String, default: "greyscale_7" },
    trackFillColor: { type: String, default: "greyscale_1" },
    trackColor: { type: String, default: "greyscale_5" }
  },

  computed: {
    classes(): object {
      return {
        ...VSlider.options.computed.classes.call(this),
        "f-input__slider": true
      };
    }
  }
});
