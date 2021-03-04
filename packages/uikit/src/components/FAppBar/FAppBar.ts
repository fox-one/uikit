import "./FAppBar.scss";
import { VAppBar, VBtn, VImg, VSpacer, VToolbarTitle } from "vuetify/lib";
import { Component, Vue, Prop } from "vue-property-decorator";
import { VNode, VNodeChildren, CreateElement } from "vue";

const lightIcon = require("../../assets/images/top-nav-arrow-light.svg");
const darkIcon = require("../../assets/images/top-nav-arrow-dark.svg");

@Component
class FAppBar extends Vue {
  @Prop({ type: Boolean, default: true }) show!: boolean;

  @Prop({ type: Boolean, default: false }) back!: boolean;

  @Prop({ type: Boolean, default: false }) customContent!: boolean;

  @Prop({ type: Boolean, default: false }) mixinImmersive!: boolean;

  @Prop({ type: [String, Array], default: "" }) title!: Exclude<
    VNodeChildren,
    boolean | null | undefined
  >;

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
      props: { small: true, icon: true, depressed: true, ripple: false },
      on: { click: this.handleBack },
    };

    let backIcon;
    if (this.$slots.backIcon) {
      backIcon = this.$slots.backIcon;
    } else {
      const dark = this.$attrs.dark || this.$vuetify.theme.dark;
      backIcon = h(
        VImg,
        {
          staticClass: "f-app-bar-back-btn-icon",
          props: {
            height: 16,
            width: 16,
            eager: true,
            aspectRatio: 0.3,
            src: dark ? darkIcon : lightIcon,
          },
        },
        [],
      );
    }

    return h(VBtn, data, [backIcon]);
  }

  render(h: CreateElement): VNode | null {
    if (!this.show) return null;

    const data = {
      ...this.$attrs,
      staticClass: `f-app-bar ${this.$attrs.color ? "color" : ""}`,
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
            staticClass: `f-app-bar-title f-title-2 pl-2 text-capitalize justify-center ${this.align
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
