import "./FTip.scss";
import { Component, Vue, Prop } from "vue-property-decorator";
import { CreateElement, VNode } from "vue/types/umd";

@Component
class FTip extends Vue {
  @Prop({ type: String, default: "info" }) type!: string;

  get class() {
    return `f-tip f-tip--${this.type}`;
  }

  render(h: CreateElement): VNode {
    return h("div", { class: [this.class] }, [this.$slots.default]);
  }
}

export default FTip;
export { FTip };
