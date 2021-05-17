import "./FSwitch.scss";
import { VSwitch } from "vuetify/lib";
import { Component, Vue, Prop, Model, Watch } from "vue-property-decorator";
import { VNode, CreateElement } from "vue";

@Component
class FSwitch extends Vue {
  @Prop({ type: String, default: "" })
  color!: string;

  @Model("change", { type: Boolean, default: false })
  value!: boolean;

  _realValue = false;

  @Watch("value")
  updateValue() {
    this._realValue = this.value;
  }

  render(h: CreateElement): VNode | null {
    this._realValue = this.value;
    const props = {
      inset: true,
      ripple: false,
      hideDetails: true,
      size: 32,
      value: this.value,
      inputValue: this.value,
      color: this.color,
      ...this.$attrs,
    };

    const data = {
      ...this.$attrs,
      staticClass: `f-switch ${!this.color && "f-switch--pure"}`,
      props,
      on: {
        change: (val) => {
          this.$emit("change", val ?? false);
        },
      },
    };

    return h(VSwitch, data, []);
  }
}

export default FSwitch;
export { FSwitch };
