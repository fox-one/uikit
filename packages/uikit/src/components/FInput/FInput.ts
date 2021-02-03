import "./FInput.scss";
import { Component, Vue, Model, Prop } from "vue-property-decorator";
import { CreateElement, VNode } from "vue/types/umd";
import { VTextField } from "vuetify/lib";

@Component
class FInput extends Vue {
  @Model("input", { default: "" }) value!: string;

  @Prop({ default: "" }) label!: string;

  render(h: CreateElement): VNode {
    const attrs: any = {
      "hide-details": true,
      filled: true,
      ...this.$attrs,
    };
    return h(
      "div",
      {
        staticClass: "f-input-wrapper",
      },
      [
        h(VTextField, {
          staticClass: "f-input",
          domProps: { "aria-autocomplete": false },
          props: {
            value: this.value,
            label: this.label,
            ...this.$attrs,
            ...this.$props,
          },
          on: {
            input: (val) => this.$emit("input", val),
          },
          attrs,
        }),
      ],
    );
  }
}

export default FInput;
export { FInput };
