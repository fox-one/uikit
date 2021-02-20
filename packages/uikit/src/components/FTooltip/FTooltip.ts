import "./FTooltip.scss";
import { Vue, Component, Prop, Model } from "vue-property-decorator";
import { CreateElement, VNode } from "vue/types/umd";
import { VTooltip } from "vuetify/lib";
import FBottomSheet from "../FBottomSheet";

@Component({
  inheritAttrs: false,
})
class FTooltip extends Vue {
  @Prop({ type: Boolean, default: false }) bottom!: boolean;
  @Prop({ type: Boolean, default: false }) top!: boolean;
  @Model("change") value!: boolean;

  render(h: CreateElement): VNode {
    const activator = this.$scopedSlots.activator;
    return h(
      VTooltip,
      {
        attrs: this.$attrs,
        props: {
          color: "greyscale_1",
          "content-class": "f-tooltip-content",
          bottom: this.bottom,
          top: this.top,
          value: this.value,
          "open-on-click": true,
          "open-on-hover": false,
        },
        on: {
          input: (val) => {
            this.$emit("change", val);
          },
        },
        scopedSlots: {
          activator: function ({ on }) {
            return (activator && activator({ on })) || null;
          },
        },
      },
      [
        h(
          "div",
          {
            staticClass: `f-tooltip-content-inner ${
              this.bottom ? "bottom" : ""
            } ${this.top ? "top" : ""}`,
          },
          this.$slots.default,
        ),
      ],
    );
  }
}

export default FTooltip;
export { FTooltip };
