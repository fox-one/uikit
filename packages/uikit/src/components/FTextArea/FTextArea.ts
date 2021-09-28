import "./FTextArea.scss";

import mixins from "vuetify/src/util/mixins";

import { VTextarea } from "vuetify/src/components";

export default mixins(VTextarea).extend({
  name: "FTextArea",

  props: {
    filled: { type: Boolean, default: true },
    color: { type: String, default: "secondary" },
    hideMessage: { type: Boolean, default: false }
  },

  computed: {
    classes(): object {
      return {
        ...VTextarea.options.computed.classes.call(this),
        "f-input": true
      };
    }
  }
});
