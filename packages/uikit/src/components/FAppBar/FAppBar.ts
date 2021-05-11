import "./FAppBar.scss";

import mixins from "vuetify/src/util/mixins";

import { VAppBar, VBtn, VIcon, VToolbarTitle } from "vuetify/src/components";

// Types
import { VNode } from "vue";
import { VNodeData } from "vue/types/umd";

export default mixins(VAppBar).extend({
  name: "FAppBar",

  props: {
    navIcon: { type: Object },
    back: { type: Boolean, default: false },
    center: { type: Boolean, default: false },
    title: { type: [String, Object], default: "" },
    mixinImmersive: { type: Boolean, default: false },
    heightSmAndDown: { type: [Number, String], default: "44" },
    heightMdAndUp: { type: [Number, String], default: "64" },
    customContent: { type: Boolean, default: false }
  },

  computed: {
    classes(): object {
      return {
        ...VAppBar.options.computed.classes.call(this),
        "f-app-bar": true,
        "f-app-bar--center": this.center,
        "f-app-bar--mixin-immersive": this.mixinImmersive
      };
    },
    styles(): object {
      return {
        ...VAppBar.options.computed.styles.call(this)
      };
    },
    computedContentHeight(): number {
      if (this.height) return parseInt(this.height);
      if (this.isProminent && this.dense) return 96;
      if (this.isProminent && this.short) return 112;
      if (this.isProminent) return 128;
      if (this.dense) return 48;
      if (this.short || this.$vuetify.breakpoint.smAndDown)
        return parseInt(this.heightSmAndDown);

      return parseInt(this.heightMdAndUp);
    }
  },

  methods: {
    genNavIcon(): VNode | null {
      const h = this.$createElement;
      let data: VNodeData = {
        staticClass: "f-app-bar__nav-icon"
      };

      if (this.back) {
        data = {
          ...data,
          props: { icon: true },
          on: { click: (e) => this.$emit("back", e) }
        };

        return h(VBtn, data, [h(VIcon, "$back")]);
      }

      if (this.navIcon) {
        return this.navIcon;
      }

      return null;
    },
    genTitle(): VNode | null {
      const h = this.$createElement;
      const data: VNodeData = { staticClass: "f-app-bar__title" };

      if (this.title) {
        return h(VToolbarTitle, data, [this.title]);
      }

      return null;
    }
  },

  render(h): VNode {
    const render = VAppBar.options.render.call(this, h);
    const icon = this.genNavIcon();
    const title = this.genTitle();
    const content = render.children?.[0];
    const children: VNode[] = [];

    if (icon) {
      children.push(icon);
    }

    if (title) {
      children.push(title);
    }

    if (!this.customContent && content) {
      content.children = [...children, ...(content.children || [])];
    }

    return render;
  }
});
