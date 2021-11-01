import "./FInput.scss";

import mixins from "vuetify/src/util/mixins";
import { VTextField, VProgressLinear } from "vuetify/src/components";
import { VNode } from "vue/types";

export default mixins(VTextField).extend({
  name: "FInput",

  props: {
    filled: { type: Boolean, default: true },
    color: { type: String, default: "secondary" },
    loadingColor: { type: String, default: "primary" },
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
            this.$scopedSlots.tools?.({ messages: this.messagesToDisplay })
          ),
        messagesNode
      ]);
    },
    genProgress(): VNode | VNode[] | null {
      if (this.loading === false) return null;

      return (
        this.$slots.progress ||
        this.$createElement(VProgressLinear, {
          props: {
            absolute: true,
            color:
              this.loading === true || this.loading === ""
                ? this.loadingColor || "primary"
                : this.loading,
            height: this.loaderHeight,
            indeterminate: true
          }
        })
      );
    }
  }
});
