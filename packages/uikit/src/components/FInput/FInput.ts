import "./FInput.scss";

import mixins from "vuetify/src/util/mixins";

import { VTextField } from "vuetify/src/components";

export default mixins(VTextField).extend({
  name: "FInput",

  props: {
    filled: { type: Boolean, default: true },
    hideMessage: { type: Boolean, default: false }
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
      let messagesNode: any = null;

      if (!this.hideMessage) {
        messagesNode = VTextField.options.methods.genMessages.call(this);
      }

      return h("div", { staticClass: "f-input-messages" }, [
        this.$scopedSlots.tools &&
          h(
            "div",
            { staticClass: "f-input__tools" },
            this.$scopedSlots.tools?.({ message: this.messagesToDisplay })
          ),
        messagesNode
      ]);
    }
  }
});
