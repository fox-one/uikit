import "./FQrCode.scss";
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { CreateElement, VNode } from "vue/types/umd";
import QRCode from "qrcode";
import { VSheet } from "vuetify/lib";

@Component
class FQrCode extends Vue {
  @Prop({ type: String, default: "" }) readonly text!: string;

  @Prop({ type: Number, default: 128 }) readonly size!: number;

  @Watch("text", { immediate: true })
  draw() {
    this.$nextTick(() => {
      const canvas = this.$refs["qrcode-canvas"] as HTMLCanvasElement;
      QRCode.toCanvas(canvas, this.text, {
        width: this.size,
        margin: 1,
      });
    });
  }

  render(h: CreateElement): VNode {
    return h("canvas", {
      ref: "qrcode-canvas",
      staticClass: "f-qrcode__canvas",
    });
    // return h(VSheet, { staticClass: "f-qrcode" }, [content]);
  }
}

export { FQrCode };
export default FQrCode;
