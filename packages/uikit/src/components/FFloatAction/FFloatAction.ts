import "./FFloatAction.scss";
import { Component, Vue, Prop } from "vue-property-decorator";
import { CreateElement, VNode } from "vue/types/umd";
import { VSheet } from "vuetify/lib";

@Component
class FFloatAction extends Vue {
  @Prop({ type: Number, default: 130 }) bottom!: number;

  get style() {
    return {
      bottom: this.bottom + "px",
    };
  }

  render(h: CreateElement): VNode {
    return h(VSheet, { staticClass: "f-float-action", style: this.style }, [
      h("div", { staticClass: "mr-2" }, [this.$slots.icon]),
      h("div", { staticClass: "caption" }, [this.$slots.default]),
    ]);
  }
}

export default FFloatAction;
