import "./FFormTips.scss";
import { Component, Vue, Prop } from "vue-property-decorator";
import { CreateElement, VNode } from "vue/types/umd";
import { VLayout, VFlex, VIcon } from "vuetify/lib";
import { mdiUnfoldMoreHorizontal } from "@mdi/js";
import { $t } from "../../utils/helper";

export interface Tip {
  hide?: boolean;
  component?: string;
  text?: string;
  error?: boolean;
}

@Component({ inheritAttrs: false })
class FFormTips extends Vue {
  @Prop({ type: Array, default: () => [] }) tips!: Tip[];

  @Prop({ type: Number, default: 3 }) max!: number;

  showAll = false;

  get meta() {
    const tips = this.tips.filter(
      (tip) => !tip.hide && (tip.component || tip.text),
    );
    return {
      items: this.showAll ? tips : tips.slice(0, this.max),
      isMoreBtnVisible: !this.showAll && tips.length > this.max,
    };
  }

  isLastTip(index) {
    const n = index + 1;
    return n > this.max && n === this.meta.items.length;
  }

  genMoreBtn() {
    const h = this.$createElement;
    if (this.showAll) return null;

    return h(
      VLayout,
      {
        show: this.meta.isMoreBtnVisible,
        staticClass: "f-form-tips__item f-form-tips__item--more",
        on: {
          click: () => (this.showAll = true),
        },
      },
      [
        h("div", { staticClass: "f-form-tips__icon" }, [
          h(VIcon, { props: { size: "14", color: "primary" } }, [
            mdiUnfoldMoreHorizontal,
          ]),
        ]),
        h(VFlex, { staticClass: "f-form-tips__text caption py-1" }, [
          $t(this, "more"),
        ]),
      ],
    );
  }

  genTips() {
    const h = this.$createElement;
    const items = this.meta.items.map((tip, index) => {
      const isLast = this.isLastTip(index);
      return h(
        VLayout,
        {
          staticClass: "f-form-tips__item",
          class: [tip.error && "f-form-tips__item--error"],
          on: {
            click: () => isLast && (this.showAll = false),
          },
        },
        [
          h("div", {
            staticClass: "f-form-tips__icon",
            class: [isLast && "f-form-tips__icon--less"],
          }),
          h(
            VFlex,
            {
              staticClass: "f-form-tips__text caption py-1",
            },
            [
              tip.component
                ? h(tip.component, { props: { ...this.$attrs } })
                : tip.text,
            ],
          ),
        ],
      );
    });

    return h("div", { staticClass: "f-form-tips__items" }, [items]);
  }

  render(h: CreateElement): VNode {
    return h(VLayout, { staticClass: "f-form-tips" }, [
      h(VFlex, { staticClass: "f-form-tips__wrapper" }, [
        h("div", { staticClass: "f-form-tips__line" }),
        this.genTips(),
        this.genMoreBtn(),
      ]),
      this.$slots.action,
    ]);
  }
}

export default FFormTips;
