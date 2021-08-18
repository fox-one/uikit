import "./FBottomSheet.scss";

import mixins from "vuetify/src/util/mixins";

import Themeable from "vuetify/src/mixins/themeable";
import { factory as ToggleableFactory } from "vuetify/src/mixins/toggleable";
import { VBottomSheet, VMenu, VDialog, VIcon } from "vuetify/src/components";
import FBottomSheetTitle from "./FBottomSheetTitle";
import FBottomSheetSubTitle from "./FBottomSheetSubtitle";

// types
import type { Component, VNode, PropType } from "vue";

export type WapperInDesktop = "menu" | "dialog";

const baseMixins = mixins(Themeable, ToggleableFactory("value", "change"));

export default baseMixins.extend({
  name: "FBottomSheet",

  props: {
    wapperInDesktop: {
      type: String as PropType<WapperInDesktop>,
      default: "menu"
    },
    adaptive: { type: Boolean, default: true },
    title: { type: String, default: "" },
    subtitle: { type: String, default: "" },
    dialogProps: { type: Object, default: () => ({}) },
    menuProps: {
      type: Object,
      default: () => ({})
    }
  },

  computed: {
    isDesktop(): boolean {
      return this.$vuetify.breakpoint.mdAndUp;
    },
    showCloseIcon(): boolean {
      return !this.isDesktop && !this.$attrs.persistent;
    },
    contentClass(): string {
      const classes = [
        "f-bottom-sheet",
        this.$attrs.contentClass || "",
        ...Object.keys(this.themeClasses).filter((k) => this.themeClasses[k])
      ];

      return classes.join(" ");
    }
  },

  methods: {
    close() {
      this.isActive = false;
    },
    getWapper() {
      let wapper: Component = VBottomSheet;
      let props = {
        ...this.$attrs,
        value: this.value,
        "content-class": this.contentClass
      };

      if (this.adaptive && this.isDesktop) {
        if (this.wapperInDesktop === "menu") {
          const defaultMenuProps = {
            offsetY: true,
            nudgeTop: -10,
            closeOnContentClick: false
          };

          wapper = VMenu;
          props = {
            ...defaultMenuProps,
            ...this.menuProps,
            ...props
          };
        } else {
          const defaultDialogProps = {
            maxWidth: 600
          };

          wapper = VDialog;
          props = { ...defaultDialogProps, ...this.dialogProps, ...props };
        }
      }

      return { wapper, props };
    },
    genCloseIcon() {
      if (!this.showCloseIcon) return null;

      return this.$createElement(
        VIcon,
        {
          props: { size: 24 },
          on: { click: () => this.close() },
          staticClass: "f-bottom-sheet__close"
        },
        "$close"
      );
    },
    genContent() {
      const h = this.$createElement;
      const children = [this.genCloseIcon(), this.$slots.default];

      if (this.title) {
        children.unshift(h(FBottomSheetTitle, this.title));
      }

      if (this.subtitle) {
        children.unshift(h(FBottomSheetSubTitle, this.subtitle));
      }

      return children;
    }
  },

  render(h): VNode {
    const { props, wapper } = this.getWapper();
    const data = {
      props,
      on: {
        input: (val: boolean) => {
          this.$emit("change", val);
        }
      },
      scopedSlots: { activator: this.$scopedSlots.activator }
    };

    return h(wapper, data, [this.genContent()]);
  }
});
