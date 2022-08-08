import "./FListItem.scss";

import { Component, Vue, Prop } from "vue-property-decorator";
import {
  VImg,
  VListItem,
  VListItemAction,
  VListItemContent,
  VIcon
} from "vuetify/lib";

import type { CreateElement } from "vue";

@Component({
  name: "FListItem",
  components: {
    VImg,
    VIcon,
    VListItem,
    VListItemAction,
    VListItemContent
  }
})
class FListItem extends Vue {
  @Prop({ default: "" }) title!: string;

  @Prop({ default: "" }) subtitle!: string;

  @Prop({ default: "" }) value!: string;

  @Prop({ default: "67" }) minHeight!: string;

  @Prop({ type: Boolean, default: true }) hideTail!: boolean;

  @Prop({ type: Boolean, default: false }) hideHead!: boolean;

  get style() {
    return { "min-height": this.minHeight + "px" };
  }

  genHead() {
    const h = this.$createElement;

    if (this.$slots.head) {
      return h("div", { staticClass: "f-list-item__head" }, [this.$slots.head]);
    }

    return null;
  }

  genBody() {
    if (this.$slots.body) return this.$slots.body;

    const h = this.$createElement;

    return h(VListItemContent, { staticClass: "f-list-item__body" }, [
      h("div", { staticClass: "f-list-item__title" }, [this.title]),
      this.subtitle &&
        h("div", { staticClass: "f-list-item__subtitle" }, [this.subtitle])
    ]);
  }

  genTail() {
    if (this.$slots.tail) return this.$slots.tail;

    if (this.hideTail) return null;

    const h = this.$createElement;

    return h(VListItemAction, { staticClass: "f-list-item__tail" }, [
      h("span", { staticClass: "f-list-item__value" }, [this.value]),
      h(VIcon, "$next")
    ]);
  }

  render(h: CreateElement) {
    return h(
      VListItem,
      {
        staticClass: "f-list-item",
        props: { ripple: false, ...this.$attrs },
        style: this.style,
        on: this.$listeners
      },
      [this.genHead(), this.genBody(), this.genTail()]
    );
  }
}
export default FListItem;
