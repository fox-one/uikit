import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { CreateElement, VNode } from "vue/types/umd";
import { VAlert } from "vuetify/lib";
import QRCode from "qrcode";

@Component
class FQrCode extends Vue {
  @Prop({ type: String, default: "" }) readonly text!: string;

  @Prop({ type: Number, default: 128 }) readonly size!: number;

  error = false;

  @Watch("text", { immediate: true })
  draw() {
    const canvas = this.$refs.canvas as HTMLCanvasElement;
    QRCode.toCanvas(
      canvas,
      this.text,
      { width: this.size, margin: 0 },
      (error) => {
        if (error) {
          this.error = true;
        }
      },
    );
  }

  render(h: CreateElement): VNode {
    const content = this.error
      ? h(VAlert, { props: { value: true, color: "error" } })
      : h("canvas", { ref: "canvas", staticClass: "f-qrcode--canvas" });
    return h("div", { staticClass: "f-qrcode" }, [content]);
  }
}

export { FQrCode };
export default FQrCode;
