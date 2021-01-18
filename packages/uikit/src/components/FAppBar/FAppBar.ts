import "./FAppBar.scss";
import { VAppBar, VBtn, VIcon, VSpacer, VToolbarTitle } from "vuetify/lib";
import { Component, Vue, Prop } from "vue-property-decorator";
import { VNode, CreateElement } from "vue";
import { mdiArrowLeft } from "@mdi/js";

@Component
class FAppBar extends Vue {
  @Prop({ type: Boolean, default: true }) show!: boolean;

  @Prop({ type: Boolean, default: false }) back!: boolean;

  @Prop({ type: Boolean, default: false }) customContent!: boolean;

  @Prop({ type: Boolean, default: false }) mixinImmersive!: boolean;

  @Prop({ type: String, default: "" }) title!: string;

  @Prop({ type: String, default: "left" }) align!: string;

  @Prop({ type: Number, default: 44 }) height!: number;

  handleBack() {
    this.$emit("back");
  }

  genBackBtn() {
    if (!this.back) {
      return null;
    }

    const h = this.$createElement;
    const data = {
      staticClass: "f-app-bar-back-btn",
      props: { small: true, icon: true },
      on: { click: this.handleBack },
    };

    return h(VBtn, data, [h(VIcon, [mdiArrowLeft])]);
  }

  render(h: CreateElement): VNode | null {
    if (!this.show) return null;

    const data = {
      ...this.$attrs,
      staticClass: `f-app-bar`,
      props: {
        height: this.height || 44,
        dense: true,
        app: true,
        fixed: true,
        flat: true,
        align: this.align,
        ...this.$attrs,
      },
    };

    let barContent: any = [this.genBackBtn()];
    if (!this.customContent) {
      barContent = barContent.concat([
        h(VSpacer),
        h(
          VToolbarTitle,
          {
            staticClass: `f-app-bar-title  pl-2 text-capitalize justify-center ${
              this.align
            } ${this.back ? "" : "no-back"}`,
          },
          [this.title],
        ),
        this.$slots.default,
      ]);
    } else {
      barContent = barContent.concat([this.$slots.default]);
    }
    if (this.mixinImmersive) {
      barContent.push(h("div", { staticClass: "f-mixin-ctrl-placeholder" }));
    }

    return h(VAppBar, data, barContent);
  }
}

export default FAppBar;
export { FAppBar };
