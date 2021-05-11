import "./FSegmentControl.scss";

import mixins from "vuetify/src/util/mixins";

import { VBtnToggle } from "vuetify/src/components";

export default mixins(VBtnToggle).extend({
  name: "FSegmentControl",

  props: {
    borderless: { type: Boolean, default: true }
  },

  computed: {
    classes(): object {
      return {
        ...VBtnToggle.options.computed.classes.call(this),
        "f-segment-control": true
      };
    }
  }
});
