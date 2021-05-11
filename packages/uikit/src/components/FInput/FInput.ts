import "./FInput.scss";

import mixins from "vuetify/src/util/mixins";

import { VTextField } from "vuetify/src/components";

export default mixins(VTextField).extend({
  name: "FInput",

  props: {
    filled: { type: Boolean, default: true }
  },

  computed: {
    classes(): object {
      return {
        ...VTextField.options.computed.classes.call(this),
        "f-input": true
      };
    }
  },

  methods: {
    genMessages() {
      const h = this.$createElement;
      const messagesNode = VTextField.options.methods.genMessages.call(this);

      return h("div", { staticClass: "f-input-messages" }, [
        this.$scopedSlots.tools &&
          h(
            "div",
            { staticClass: "f-input__tools" },
            this.$scopedSlots.tools?.({})
          ),
        messagesNode
      ]);
    }
  }
});
