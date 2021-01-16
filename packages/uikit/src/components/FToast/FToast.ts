import "./FToast.scss";

import { Component, Vue, Prop } from "vue-property-decorator";
import { CreateElement, VNode } from "vue/types/umd";
import { VSnackbar } from "vuetify/lib";

@Component({
  inheritAttrs: false,
})
class FToast extends Vue {
  @Prop({ type: Boolean, default: false }) show!: boolean;

  @Prop({ type: String, default: "" }) message!: string;

  render(h: CreateElement): VNode {
    return h(
      VSnackbar,
      {
        attrs: this.$attrs,
        props: { value: this.show },
        on: { input: (e) => this.$emit("change", e) },
      },
      [this.message],
    );
  }
}

export default FToast;
export { FToast };
