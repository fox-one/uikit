import "./FButton.scss";
import { VBtn, VSpacer } from "vuetify/lib";
import { Component, Vue, Prop } from "vue-property-decorator";
import { VNode, CreateElement } from "vue";

@Component
class FButton extends Vue {
  @Prop({ type: Boolean, default: false }) customContent!: boolean;

  @Prop({ type: Boolean, default: false }) block!: boolean;

  @Prop({ type: String, default: "Action" }) label!: string;

  @Prop({ type: String, default: "primary" }) type!: string;

  @Prop({ type: String, default: "" }) color!: string;

  render(h: CreateElement): VNode | null {
    const props: any = {
      block: this.block,
      depressed: true,
      rounded: true,
      ripple: false,
      ...this.$attrs,
    };
    if (this.type === "primary") {
      props.color = "primary";
    } else if (this.type === "secondary") {
      props.color = "primary";
      props.outlined = true;
    } else if (this.type === "warning") {
      props.color = "error";
    } else if (this.type === "subtitle") {
      props.color = "grayscale_2";
      props.outlined = true;
    } else {
      props.color = "primary";
      props.text = true;
    }
    if (this.color) {
      props.color = this.color;
    }
    const data = {
      ...this.$attrs,
      staticClass: `f-button ${this.block ? "block" : ""} f-button-type-${
        this.type
      }`,
      props,
      on: {
        click: (e) => this.$emit("click", e),
      },
    };

    let barContent: any = [];
    barContent = barContent.concat([
      h(VSpacer),
      this.$slots.default,
      h(VSpacer),
    ]);

    return h(VBtn, data, barContent);
  }
}

export default FButton;
export { FButton };
