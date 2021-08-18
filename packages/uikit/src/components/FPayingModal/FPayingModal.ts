import "./FPayingModal.scss";
import { Component, Vue, Prop } from "vue-property-decorator";
import { CreateElement } from "vue";
import { VNode } from "vue";
import { VOverlay, VBtn } from "vuetify/lib";
import { $t } from "../../utils/helper";

@Component({
  name: "FPayingModal"
})
class FPayingModal extends Vue {
  @Prop({ type: Boolean, default: false }) show!: boolean;

  @Prop({ type: String, default: "" }) text!: boolean;

  genSpinner() {
    const h = this.$createElement;

    return h("div", { staticClass: "f-spinner__wrapper" }, [
      Array.from({ length: 4 }).map(() =>
        h("span", { staticClass: "f-spinner__rect" })
      )
    ]);
  }

  genActions() {
    const h = this.$createElement;

    const actions = [
      h(
        VBtn,
        {
          props: {
            outlined: true,
            block: true,
            rounded: true
          },
          on: {
            click: (e) => this.$emit("cancel", e)
          }
        },
        [$t(this, "cancel")]
      )
    ];

    return h("div", { staticClass: "f-payment__actions" }, [actions]);
  }

  render(h: CreateElement): VNode {
    return h(
      VOverlay,
      {
        staticClass: "f-payment-loading",
        props: { value: this.show, opacity: 0.8, ...this.$attrs }
      },
      [
        this.genSpinner(),
        h(
          "div",
          { staticClass: "f-payment__hint text-center subtitle-2 my-5" },
          [this.text]
        ),
        this.genActions()
      ]
    );
  }
}

export default FPayingModal;
