import "./FActionBar.scss";
import { Component, Vue, Prop } from "vue-property-decorator";
import { CreateElement, VNode } from "vue";
import FPanel from "../FPanel";
import { VBtn, VIcon } from "vuetify/lib";

@Component
class FActionBar extends Vue {
  @Prop() actions!: Uikit.ActionButton[];

  @Prop({ type: Boolean, default: false }) fixed!: boolean;

  handleClick(btn: Uikit.ActionButton) {
    this.$emit("click", btn);
  }

  genAction(action: Uikit.ActionButton) {
    const h = this.$createElement;
    const btn = h(VBtn, { props: { icon: true } }, [
      h(VIcon, { props: { size: action.size, color: action.color } }, [
        action.icon,
      ]),
    ]);

    return h(
      "div",
      {
        staticClass: "f-actionbar--action",
        on: { click: () => this.handleClick(action) },
      },
      [btn, action.text],
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
