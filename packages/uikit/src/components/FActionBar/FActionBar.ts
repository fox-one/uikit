import { Component, Vue, Prop } from "vue-property-decorator";
import { CreateElement, VNode } from "vue";
import FPanel from "../FPanel";
import { VBtn, VIcon } from "vuetify/lib";

export interface ActionButton {
  size: string;
  color: string;
  text: string;
  icon: string;
}

@Component
class FActionBar extends Vue {
  @Prop() actions!: ActionButton[];

  handleClick(btn: ActionButton) {
    this.$emit("click", btn);
  }

  genAction(action: ActionButton) {
    const h = this.$createElement;
    const btn = h(VBtn, { props: { icon: true } }, [
      h(VIcon, { props: { size: action.size, color: action.color } }, [
        action.icon,
      ]),
    ]);

    return h("div", { on: { click: () => this.handleClick(action) } }, [
      btn,
      action.text,
    ]);
  }

  render(h: CreateElement): VNode {
    const actions = this.actions.map((action) => this.genAction(action));
    return h(FPanel, { props: { elevation: "high" } }, actions);
  }
}

export default FActionBar;
