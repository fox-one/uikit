import "./FBottomSheet.scss";
import { Vue, Component, PropSync } from "vue-property-decorator";
import { CreateElement, VNode } from "vue/types/umd";
import { VBottomSheet, VCard, VCardTitle, VCardText } from "vuetify/lib";

@Component
class FBottomSheet extends Vue {
  @PropSync("show") bindShow!: boolean;

  render(h: CreateElement): VNode {
    const activator = this.$scopedSlots.activator!;

    return h(
      VBottomSheet,
      {
        props: {
          value: this.bindShow,
          "content-class": "f-bottom-sheet",
        },
        on: { input: (val) => (this.bindShow = val) },
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
            staticClass: "f-bottom-sheet--content",
            props: { elevation: 0 },
          },
          [
            h(
              VCardTitle,
              { staticClass: "f-bottom-sheet--title subtitle-1" },
              this.$slots.title,
            ),
            h(VCardText, this.$slots.subheader),
            h(
              VCardText,
              { staticClass: "f-bottom-sheet--body" },
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
