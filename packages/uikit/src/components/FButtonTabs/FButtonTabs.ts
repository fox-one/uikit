import "./FButtonTabs.scss";
import { VBtnToggle } from "vuetify/lib";
import { Component, Vue, Prop, Model } from "vue-property-decorator";
import { VNode, CreateElement } from "vue";

@Component
class FButtonTabs extends Vue {
  @Prop({ type: Boolean, default: false }) grow!: boolean;

  @Model("change", { default: () => [] }) value!: any;

  render(h: CreateElement): VNode | null {
    const props: any = {
      borderless: true,
      ripple: false,
      value: this.value,
      ...this.$attrs,
    };

    const data: any = {
      ...this.$attrs,
      staticClass: `f-button-tabs ${this.grow ? "grow" : ""}`,
      props,
      on: {
        change: (val) => {
          this.$emit("change", val);
        },
      },
    };

    return h(VBtnToggle, data, [this.$slots.tabs]);
  }
}

export default FButtonTabs;
export { FButtonTabs };
