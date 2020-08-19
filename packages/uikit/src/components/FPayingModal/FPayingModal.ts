import "./FPayingModal.scss";
import { Component, Vue, Prop } from "vue-property-decorator";
import { CreateElement } from "vue";
import { VNode } from "vue";
import { VOverlay, VBtn } from "vuetify/lib";

@Component
class FPayingModal extends Vue {
  @Prop({ type: Boolean, default: false }) show!: boolean;

  @Prop({ type: String, default: "" }) text!: boolean;

  genSpinner() {
    const h = this.$createElement;
    return h("div", { staticClass: "f-spinner--wrapper" }, [
      Array.from({ length: 4 }).map(() =>
        h("span", { staticClass: "f-spinner--rect" }),
      ),
    ]);
  }

  render(h: CreateElement): VNode {
    return h(
      VOverlay,
      { staticClass: "f-payment-loading", props: { value: this.show } },
      [
        this.genSpinner(),
        h("div", { staticClass: "f-payment--hint" }, [this.text]),
        h("div", { staticClass: "f-payment--actions" }, [
          h(
            VBtn,
            { props: { outlined: true, block: true, color: "primary" } },
            ["cancel"],
          ),
        ]),
      ],
    );
  }
}

export default FPayingModal;
