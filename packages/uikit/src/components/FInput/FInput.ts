import "./FInput.scss";
import { Component, Vue, Model, Prop } from "vue-property-decorator";
import { CreateElement, VNode } from "vue/types/umd";
import { VTextarea, VTextField } from "vuetify/lib";

@Component
class FInput extends Vue {
  @Model("input", { default: "" }) value!: string;

  @Prop({ default: "" }) label!: string;
  @Prop({ default: "" }) hint!: string;
  @Prop({ default: () => [] }) rules!: any;
  @Prop({ default: false }) textarea!: boolean;
  @Prop({ default: false }) persistentHint!: boolean;

  render(h: CreateElement): VNode {
    const attrs: any = {
      "hide-details": !(this.hint && this.persistentHint !== false),
      filled: true,
      ...this.$attrs,
    };
    const base = this.textarea !== false ? VTextarea : VTextField;
    return h(
      "div",
      {
        staticClass: "f-input-wrapper",
      },
      [
        h(
          base,
          {
            staticClass: `f-input ${
              this.textarea !== false ? "f-textarea" : ""
            }`,
            domProps: { "aria-autocomplete": false },
            props: {
              value: this.value,
              label: this.label,
              hint: this.hint,
              rules: this.rules,
              persistentHint: this.persistentHint,
              ...this.$attrs,
              ...this.$props,
            },
            on: {
              ...this.$listeners,
              input: (val) => this.$emit("input", val),
            },
            attrs,
          },
          [
            h(
              "div",
              {
                staticClass: "f-input-append-wrapper f-input-wrapper",
                slot: "append",
              },
              this.$slots.append,
            ),
            h(
              "div",
              {
                staticClass: "f-input-append-outer-wrapper f-input-wrapper",
                slot: "append-outer",
              },
              this.$slots.appendOuter,
            ),
            h(
              "div",
              {
                staticClass: "f-input-prepend-wrapper f-input-wrapper",
                slot: "prepend",
              },
              this.$slots.prepend,
            ),
            h(
              "div",
              {
                staticClass: "f-input-prepend-inner-wrapper f-input-wrapper",
                slot: "prepend-inner",
              },
              this.$slots.prependInner,
            ),
          ],
        ),
      ],
    );
  }
}

export default FInput;
export { FInput };
