import "./FButtonTabs.scss";
import { VBtnToggle } from "vuetify/lib";
import { Component, Vue, Prop, Model, Watch } from "vue-property-decorator";
import { VNode, CreateElement } from "vue";

@Component
class FButtonTabs extends Vue {
  @Prop({ type: String, default: "" }) color!: string;

  @Prop({ type: Boolean, default: false }) grow!: boolean;

  @Model("change", { default: () => [] }) value!: any;

  // _realValue = false;

  // @Watch("value")
  // updateValue() {
  //   this.value = this.value === true ? true : false;
  //   this._realValue = this.value;
  // }

  render(h: CreateElement): VNode | null {
    // this._realValue = this.value;
    const props: any = {
      borderless: true,
      ripple: false,
      value: this.value,
      mandatory: true,
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
