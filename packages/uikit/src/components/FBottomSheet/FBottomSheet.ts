import "./FBottomSheet.scss";
import { Vue, Component, Model } from "vue-property-decorator";
import { CreateElement, VNode } from "vue/types/umd";
import { VBottomSheet, VCard, VCardTitle, VCardText } from "vuetify/lib";

@Component
class FBottomSheet extends Vue {
  @Model("change") value!: boolean;

  render(h: CreateElement): VNode {
    const activator = this.$scopedSlots.activator!;

    return h(
      VBottomSheet,
      {
        props: {
          value: this.value,
          "content-class": "f-bottom-sheet",
        },
        on: { input: (val) => this.$emit("change", val) },
        scopedSlots: {
          activator: function ({ on }) {
            return activator({ on });
          },
        },
      },
      [
        h(
          VCard,
          {
            staticClass: "f-bottom-sheet__content",
            props: { elevation: 0 },
          },
          [
            h(
              VCardTitle,
              { staticClass: "f-bottom-sheet__title subtitle-1" },
              this.$slots.title,
            ),
            h(VCardText, this.$slots.subheader),
            h(
              VCardText,
              { staticClass: "f-bottom-sheet__body" },
              this.$slots.default,
            ),
          ],
        ),
      ],
    );
  }
}

export default FBottomSheet;
export { FBottomSheet };
