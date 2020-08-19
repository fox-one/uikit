import "./FSelector.scss";
import { Component, Vue, Prop } from "vue-property-decorator";
import { VNode, CreateElement } from "vue/types/umd";
import { VBottomSheet, VSheet, VTextField } from "vuetify/lib";

@Component
class FSelector extends Vue {
  @Prop({ type: Boolean, default: false }) show!: boolean;

  @Prop({ type: String, default: "" }) filter!: string;

  render(h: CreateElement): VNode {
    const activator = this.$scopedSlots.activator!;

    return h(
      VBottomSheet,
      {
        props: {
          value: this.show,
          "content-class": "f-bottom-seletor",
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
            staticClass: "f-bottom-seletor--sheet pa-5",
            props: { elevation: 0 },
          },
          [
            h(VTextField, {
              props: {
                value: this.filter,
                placeholder: "search",
                "hide-details": true,
                "single-line": true,
              },
              on: {
                change: (e) => this.$emit("change:filter", e),
              },
            }),
            this.$slots.default,
          ],
        ),
      ],
    );
  }
}

export default FSelector;
