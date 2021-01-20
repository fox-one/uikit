import "./FActionBar.scss";
import { Component, Vue, Prop } from "vue-property-decorator";
import { CreateElement, VNode } from "vue";
import FPanel from "../FPanel";
import { VBtn, VIcon, VFlex } from "vuetify/lib";
import { FButton } from "../FButton";

export interface ActionButton {
  size: string;
  color: string;
  text: string;
  icon: string;
}

@Component
class FActionBar extends Vue {
  @Prop() actions!: ActionButton[];

  @Prop({ type: Boolean, default: false }) fixed!: boolean;

  handleClick(btn: ActionButton) {
    this.$emit("click", btn);
  }

  genAction(action: ActionButton) {
    const h = this.$createElement;
    const btn = h(FButton, { props: { type: "text", padding: 0 } }, [
      h(
        VFlex,
        { staticClass: "d-flex flex-column justify-center align-center" },
        [
          h(VIcon, { props: { size: action.size, color: action.color } }, [
            action.icon,
          ]),
          h(
            "span",
            {
              staticClass: "f-actionbar-button-label f-caption f-weight-m mt-1",
            },
            [action.text],
          ),
        ],
      ),
    ]);

    return h(
      "div",
      {
        staticClass: "f-actionbar--action",
        on: { click: () => this.handleClick(action) },
      },
      [btn],
    );
  }

  render(h: CreateElement): VNode {
    const actions = this.actions.map((action) => this.genAction(action));
    return h(
      FPanel,
      {
        staticClass: "f-actionbar",
        class: [this.fixed ? "f-actionbar--fixed" : ""],
        props: {
          elevation: "high",
        },
      },
      actions,
    );
  }
}

export default FActionBar;
