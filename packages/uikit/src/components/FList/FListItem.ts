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
  @Prop({ type: String, default: "" }) title!: string;

  @Prop({ type: String, default: "" }) subtitle!: string;

  @Prop({ type: String, default: "" }) value!: string;

  genHead() {
    return this.$slots.head;
  }

  genBody() {
    if (this.$slots.body) return this.$slots.body;

    const h = this.$createElement;

    return h(VListItemContent, { staticClass: "f-list-item__body" }, [
      h("div", { staticClass: "f-list-item__title" }, [this.title]),
      h("div", { staticClass: "f-list-item__subtitle" }, [this.title])
    ]);
  }

  genTail() {
    if (this.$slots.tail) return this.$slots.tail;

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
        on: this.$listeners
      },
      [this.genHead(), this.genBody(), this.genTail()]
    );
  }
}
export default FListItem;
