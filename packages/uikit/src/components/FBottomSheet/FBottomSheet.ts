import "./FBottomSheet.scss";
import { Vue, Component, Model, Prop } from "vue-property-decorator";
import { CreateElement, VNode } from "vue/types/umd";
import {
  VBottomSheet,
  VMenu,
  VDialog,
  VCard,
  VCardTitle,
  VCardText,
  VIcon,
} from "vuetify/lib";
import { mdiClose } from "@mdi/js";

@Component({
  inheritAttrs: false,
})
class FBottomSheet extends Vue {
  @Model("change") value!: boolean;

  @Prop({ default: "menu" })
  desktopWapper!: "menu" | "dialog";

  @Prop({ default: false })
  adaptive!: boolean;

  get isDesktop() {
    return this.$vuetify.breakpoint.mdAndUp;
  }

  get wapper() {
    let Wapper = VBottomSheet;
    if (this.adaptive && this.isDesktop) {
      Wapper = this.desktopWapper === "menu" ? VMenu : VDialog;
    }
    return Wapper;
  }

  genTitle() {
    if (!this.$slots.title) return null;
    return this.$createElement(
      VCardTitle,
      { staticClass: "f-bottom-sheet__title subtitle-1" },
      this.$slots.title,
    );
  }

  genSubheader() {
    if (!this.$slots.subheader) return null;
    return this.$createElement(
      VCardText,
      { staticClass: "px-3" },
      this.$slots.subheader,
    );
  }

  genContent() {
    const h = this.$createElement;

    let iconClose: VNode | null = null;
    if (this.$attrs.persistent) {
      iconClose = h(
        VIcon,
        {
          props: { size: 18 },
          on: { click: () => this.$emit("change", false) },
          staticClass: "f-bottom-sheet__close",
        },
        [mdiClose],
      );
    }

    return h(
      VCard,
      {
        staticClass: `f-bottom-sheet__content`,
        props: { elevation: 0 },
      },
      [
        this.genTitle(),
        this.genSubheader(),
        iconClose,
        h(
          VCardText,
          { staticClass: "f-bottom-sheet__body px-0" },
          this.$slots.default,
        ),
      ],
    );
  }

  render(h: CreateElement): VNode {
    const activator = this.$scopedSlots.activator;

    let attrs = {};
    if (this.wapper === VBottomSheet) {
      attrs = { maxWidth: "100%" };
    }

    if (this.wapper === VMenu) {
      attrs = { "offset-y": true };
    }

    return h(
      this.wapper,
      {
        attrs: { ...this.$attrs, ...attrs },
        props: {
          value: this.value,
          scrollable: false,
          "content-class": "f-bottom-sheet",
        },
        on: {
          input: (val) => {
            this.$emit("change", val);
          },
        },
        scopedSlots: {
          activator: ({ on }) => {
            return (activator && activator({ on })) || null;
          },
        },
      },
      [this.genContent()],
    );
  }
}

export default FBottomSheet;
export { FBottomSheet };
