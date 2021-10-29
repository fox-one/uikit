import "./FLoading.scss";
import { Component, Vue, Prop } from "vue-property-decorator";
import { CreateElement } from "vue";
import { VNode } from "vue";
import { VOverlay, VProgressCircular } from "vuetify/lib";

@Component({
  name: "FLoading"
})
class FLoading extends Vue {
  @Prop({ type: Boolean, default: false }) fullscreen!: boolean;

  @Prop({ type: Boolean, default: false }) loading!: boolean;

  @Prop({ type: String, default: "primary" }) color!: string;

  @Prop({ type: Number, default: 0 }) opacity!: number;

  render(h: CreateElement): VNode | null {
    const circular = [
      h("div", { staticClass: "f-loading--wrapper" }, [
        h(VProgressCircular, {
          props: {
            width: 3,
            indeterminate: true,
            color: this.color,
            ...this.$attrs
          }
        }),
        this.$slots.text &&
          h(
            "span",
            { staticClass: "f-loading--text mt-2 text--secondary caption" },
            this.$slots.text
          )
      ])
    ];

    if (!this.fullscreen) {
      return h("div", circular);
    }

    return h(
      VOverlay,
      {
        props: {
          opacity: this.opacity,
          value: this.loading,
          ...this.$attrs
        }
      },
      [circular]
    );
  }
}

export default FLoading;
