import { Vue, Model, Prop, Component } from "vue-property-decorator";
import { CreateElement, VNode } from "vue/types/umd";
import { VTextField } from "vuetify/lib";
import { toPrecision } from "../../utils/helper";

@Component({
  inheritAttrs: false,
})
class FNumberInput extends Vue {
  @Model("input", { default: "" }) value!: string;

  @Prop() precision!: number;

  @Prop({ default: false }) reverse!: string;

  handleSetValue(value) {
    let temp = value;
    if (this.precision !== undefined) {
      temp = toPrecision(value, this.precision) + "";
    }
    this.$emit("input", temp);
    const input: any = this.$refs.input;
    input.lazyValue = temp;
  }

  render(h: CreateElement): VNode {
    return h(VTextField, {
      ref: "input",
      domProps: { "aria-autocomplete": "off" },
      props: {
        value: this.value,
        type: "number",
        reverse: this.reverse,
      },
      attrs: { ...this.$attrs },
      on: {
        input: (val) => this.handleSetValue(val),
      },
    });
  }
}

export default FNumberInput;
export { FNumberInput };
