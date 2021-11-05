import "./FInput.scss";

import mixins from "vuetify/src/util/mixins";
import { VTextField, VProgressLinear } from "vuetify/src/components";
import { VNode } from "vue/types";

export default mixins(VTextField).extend({
  name: "FInput",

  props: {
    filled: { type: Boolean, default: true },
    loadingColor: { type: String, default: "primary" },
    slotColor: { type: String, default: "primary" },
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
    },
    genClearIcon() {
      if (!this.clearable) return null;

      // if the text field has no content then don't display the clear icon.
      // We add an empty div because other controls depend on a ref to append inner
      if (!this.isDirty) {
        return this.genSlot("append", "inner", [this.$createElement("div")]);
      }

      return this.genSlot("append", "inner", [
        this.genIcon("clear", this.clearableCallback, {
          props: { color: this.validationState || this.slotColor }
        })
      ]);
    }
  }
});
