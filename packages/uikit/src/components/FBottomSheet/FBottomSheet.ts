import { Vue, Component } from "vue-property-decorator";
import { CreateElement, VNode } from "vue/types/umd";
import { VBottomSheet, VSheet, VTextField } from "vuetify/lib";

@Component
class FBottomSheet extends Vue {
  show = false;

  render(h: CreateElement): VNode {
    const activator = this.$scopedSlots.activator!;

    return h(
      VBottomSheet,
      {
        props: {
          value: this.show,
          "content-class": "f-bottom-sheet",
        },
        on: { change: (e) => this.$emit("change:show", e) },
        scopedSlots: {
          activator: function ({ on }) {
            return activator({ on });
          },
        },
      },
      [
        h(
          VSheet,
          {
            staticClass: "f-bottom-sheet--content pa-5",
            props: { elevation: 0 },
          },
          [
            h("div", { staticClass: "f-bottom-sheet--title" }),
            this.$slots.default,
          ],
        ),
      ],
    );
  }
}

export default FBottomSheet;
export { FBottomSheet };
