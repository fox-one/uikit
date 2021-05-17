import "./FButton.scss";
import { VBtn, VSpacer } from "vuetify/lib";
import { Component, Vue, Prop } from "vue-property-decorator";
import { VNode, CreateElement } from "vue";

const isSafari =
  navigator.userAgent.toUpperCase().includes("SAFARI") ||
  navigator.userAgent.toUpperCase().includes("IPHONE");

@Component
class FButton extends Vue {
  @Prop({ type: Boolean, default: false }) customContent!: boolean;

  @Prop({ type: Boolean, default: false }) block!: boolean;

  @Prop({ type: String, default: "Action" }) label!: string;

  @Prop({ type: String, default: "primary" }) type!: string;

  @Prop({ type: String, default: "" }) color!: string;

  @Prop({ type: Number, default: 56 }) padding!: number;

  oldDisabledValue = false;
  render(h: CreateElement): VNode | null {
    if (isSafari) {
      const newDisabledVaule = Boolean(this.$attrs.disabled);
      if (this.oldDisabledValue === true && newDisabledVaule === false) {
        // workaround for safari
        // console.log('got you, safari, you idiot')
        setTimeout(() => {
          const el = (this.$refs.btn as any).$el;
          const contentEl = el.querySelector(".v-btn__content ");
          const tmp = contentEl.style.display;
          contentEl.style.display = "none";
          contentEl.style.display = tmp || "inline";
        }, 50);
      }
      this.oldDisabledValue = newDisabledVaule;
    }

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
      props.color = "greyscale_2";
      props.outlined = true;
    } else {
      props.color = "primary";
      props.text = true;
    }
    if (this.color) {
      props.color = this.color;
    }

    const data: any = {
      ...this.$attrs,
      ref: "btn",
      staticClass: `f-button ${this.block ? "block" : ""} f-button-type-${
        this.type
      }`,
      props,
      on: {
        click: (e) => this.$emit("click", e),
        touchstart: (e) => this.$emit("touchstart", e),
      },
    };
    if (this.padding !== 56) {
      data.staticStyle = {
        paddingLeft: this.padding,
        paddingRight: this.padding,
      };
    }
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
