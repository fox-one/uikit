import "./FMixinAssetLogo.scss";
import { Component, Vue, Prop } from "vue-property-decorator";
import { CreateElement, VNode } from "vue/types/umd";
import { VImg, VSheet } from "vuetify/lib";

@Component
class FMixinAssetLogo extends Vue {
  @Prop({ type: Number, default: 64 }) size!: number;

  @Prop({ type: String, default: "" }) logo!: string;

  @Prop({ type: String, default: "" }) chainLogo!: string;

  genChain() {
    const h = this.$createElement;

    if (!this.chainLogo || this.chainLogo === this.logo) {
      return null;
    }

    const size = this.size <= 48 ? 12 : 16;

    return h(
      VSheet,
      {
        staticClass: "rounded-circle f-asset-logo__chain",
        class: [this.size <= 48 ? "f-asset-logo__chain--small" : ""],
      },
      [
        h("div", [
          h(VImg, {
            props: { src: this.chainLogo, width: size, height: size },
          }),
        ]),
      ],
    );
  }

  genLogo() {
    const h = this.$createElement;

    if (!this.logo) {
      return null;
    }

    return h(VImg, {
      props: { width: this.size, height: this.size, src: this.logo },
    });
  }

  render(h: CreateElement): VNode {
    return h(
      "div",
      {
        staticClass: "rounded-circle f-asset-logo",
        props: { width: this.size, height: this.size },
      },
      [this.genLogo(), this.genChain()],
    );
  }
}

export default FMixinAssetLogo;
export { FMixinAssetLogo };
