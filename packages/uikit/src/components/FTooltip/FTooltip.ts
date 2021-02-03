import "./FTooltip.scss";
import { Vue, Component, Prop } from "vue-property-decorator";
import { CreateElement, VNode } from "vue/types/umd";
import { VTooltip } from "vuetify/lib";

@Component({
  inheritAttrs: false,
})
class FTooltip extends Vue {
  @Prop({ type: Boolean, default: false }) bottom!: boolean;
  @Prop({ type: Boolean, default: false }) top!: boolean;

  render(h: CreateElement): VNode {
    const activator = this.$scopedSlots.activator;
    console.log(this.bottom, this.top);
    return h(
      VTooltip,
      {
        attrs: this.$attrs,
        props: {
          color: "greyscale_1",
          "content-class": "f-tooltip-content",
          bottom: this.bottom,
          top: this.top,
        },
        on: { click: (val) => this.$emit("click", val) },
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
