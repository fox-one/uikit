import "./FAppBar.scss";
import { VAppBar, VBtn, VImg, VToolbarTitle } from "vuetify/lib";
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";
import Themeable from "vuetify/src/mixins/themeable";

import lightIcon from "../../assets/images/top-nav-arrow-light.svg";
import darkIcon from "../../assets/images/top-nav-arrow-dark.svg";

import type { VNode, CreateElement } from "vue";

export interface PropsTypes {
  show?: boolean;
  back?: boolean;
  customContent?: boolean;
  mixinImmersive?: boolean;
  title?: string | VNode;
  align?: "left" | "center";
  height?: number;
  color?: string;
}

@Component({
  inheritAttrs: false
})
class FAppBar extends Mixins(Vue, Themeable) {
  @Prop({ type: Boolean, default: true }) show!: boolean;

  @Prop({ type: Boolean, default: false }) back!: boolean;

  @Prop({ type: Boolean, default: false }) customContent!: boolean;

  @Prop({ type: Boolean, default: false }) mixinImmersive!: boolean;

  @Prop({ default: "" }) title!: string;

  @Prop({ type: String, default: "left" }) align!: "center" | "left";

  @Prop({ type: Number, default: 44 }) height!: number;

  get classes() {
    return {
      "f-app-bar--center": this.align === "center",
      "f-app-bar--left": this.align === "left",
      "f-app-bar--back": this.back,
      "f-app-bar--mixin-immersive": this.mixinImmersive
    };
  }

  genBackIcon() {
    const h = this.$createElement;

    return (
      this.$slots.backIcon ||
      h(VImg, {
        staticClass: "f-app-bar__back-icon",
        props: {
          height: 16,
          width: 16,
          eager: true,
          aspectRatio: 0.3,
          src: this.isDark ? darkIcon : lightIcon
        }
      })
    );
  }

  genBackBtn() {
    if (!this.back) return null;
    const h = this.$createElement;

    return h(
      VBtn,
      {
        staticClass: "f-app-bar__back",
        props: { small: true, icon: true, depressed: true, ripple: false },
        on: { click: () => this.$emit("back") }
      },
      [this.genBackIcon()]
    );
  }

  genContent() {
    if (this.customContent) {
      return [this.$slots.default];
    }

    const h = this.$createElement;

    return [
      h(VToolbarTitle, { staticClass: "f-app-bar__title" }, [this.title])
    ];
  }

  render(h: CreateElement): VNode | null {
    if (!this.show) return null;

    return h(
      VAppBar,
      {
        staticClass: "f-app-bar",
        class: this.classes,
        props: {
          height: this.height || 44,
          dense: true,
          app: true,
          fixed: true,
          flat: true,
          align: this.align,
          ...this.$attrs
        },
        ...this.$attrs
      },
      this.genContent()
    );
  }
}

export default FAppBar;
export { FAppBar };
