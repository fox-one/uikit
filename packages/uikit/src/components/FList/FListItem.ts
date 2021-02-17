import "./FListItem.scss";
import { Component, Vue, Prop } from "vue-property-decorator";
import { CreateElement, VNode } from "vue/types/umd";
import { mdiArrowRight } from "@mdi/js";

import {
  VIcon,
  VImg,
  VListItem,
  VListItemAction,
  VListItemActionText,
  VListItemContent,
  VListItemTitle,
} from "vuetify/lib";

const lightIcon = require("../../assets/images/list-arrow-light.svg");
const darkIcon = require("../../assets/images/list-arrow-dark.svg");

@Component
class FListItem extends Vue {
  @Prop({ type: String, default: "" }) title!: string;

  @Prop({ type: String, default: "" }) subtitle!: string;

  @Prop({ type: String, default: "" }) value!: string;

  render(h: CreateElement): VNode {
    const data: any = [];
    // head?
    if (this.$slots.head) {
      data.push(
        h("div", { staticClass: "f-list-item-icon-wrapper mr-4" }, [
          this.$slots.head,
        ]),
      );
    }

    // content
    if (this.title || this.subtitle) {
      data.push(
        h(VListItemContent, { staticClass: "f-list-item-content" }, [
          h("div", { staticClass: "f-greyscale-1 f-body-1" }, this.title),
          this.subtitle
            ? h(
                "div",
                { staticClass: "f-list-item-subtitle f-greyscale-3 f-caption" },
                this.subtitle,
              )
            : null,
        ]),
      );
    } else {
      data.push(this.$slots.body);
    }

    // tail?
    if (this.$slots.tail) {
      data.push(this.$slots.tail);
    } else {
      data.push(
        h(
          VListItemAction,
          { staticClass: "d-flex flex-row align-center justify-end" },
          [
            h(
              "span",
              { staticClass: "text f-greyscale-4 f-body-1" },
              this.value,
            ),
            h(
              VImg,
              {
                staticClass: "f-list-item-arrow",
                props: {
                  eager: true,
                  aspectRatio: 0.3,
                  src: (this as any).$vuetify.theme.dark ? darkIcon : lightIcon,
                },
              },
              [],
            ),
          ],
        ),
      );
    }
    return h(
      VListItem,
      {
        staticClass: "f-list-item",
        attrs: this.$attrs,
        props: {
          ripple: false,
          ...this.$attrs,
        },
        on: {
          click: (e) => this.$emit("click", e),
          touchstart: (e) => this.$emit("touchstart", e),
        },
      },
      data,
    );
  }
}

export default FListItem;
export { FListItem };
