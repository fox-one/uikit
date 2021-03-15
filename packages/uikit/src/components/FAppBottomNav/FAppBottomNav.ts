import "./FAppBottomNav.scss";

import { Component, Prop } from "vue-property-decorator";
import Vue, { CreateElement, VNode, VNodeData } from "vue";
import { VBottomNavigation, VBtn, VIcon } from "vuetify/lib";

export interface NavItem {
  [k: string]: any;
  text: string;
  icon: string;
  value: string;
}

@Component
class FAppBottomNav extends Vue {
  name = "FAppBottomNav";

  @Prop() nav!: string;

  @Prop() animation!: boolean;

  @Prop() items!: NavItem[];

  handleNavClick(nav: NavItem) {
    this.$emit("change", nav);
  }

  genDot(nav: NavItem): VNode | null {
    const h = this.$createElement;
    const active = this.nav === nav.value;

    if (!this.animation) {
      return null;
    }

    return h(
      "div",
      {
        staticClass: "f-bottom-nav__dot-wrapper",
        class: [active ? "animate__bounceIn animate__animated" : ""],
      },
      [h("span", { staticClass: "f-bottom-nav__dot" })],
    );
  }

  genBtn(nav: NavItem): VNode {
    const h = this.$createElement;
    const active = this.nav === nav.value;

    const data: VNodeData = {
      class: ["f-bottom-nav__btn", active ? "f-bottom-nav__btn--active" : ""],
      props: {
        ripple: false,
        value: nav.value,
        color: active ? "primary--text" : "",
      },
      on: { click: () => this.handleNavClick(nav) },
    };

    const icon = h(
      VIcon,
      {
        class: "mb-1",
        props: { size: "22" },
        attrs: { active },
      },
      [nav.icon],
    );

    return h(VBtn, data, [nav.text, icon, this.genDot(nav)]);
  }

  render(h: CreateElement): VNode | null {
    if (!this.nav) {
      return null;
    }

    const data: VNodeData = {
      attrs: this.$attrs,
      staticClass: "f-bottom-nav elevation-1",
      props: {
        fixed: true,
        grow: true,
        app: true,
        mandatory: false,
        value: this.nav,
        "input-value": Boolean(this.nav),
        ...this.$attrs,
      },
    };

    return h(
      VBottomNavigation,
      data,
      this.items.map((btn) => this.genBtn(btn)),
    );
  }
}

export default FAppBottomNav;
