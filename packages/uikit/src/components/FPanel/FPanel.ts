import { CreateElement, VNode, VNodeData } from "vue";
import Vue from "vue";
import "./FPanel.scss";

import { VSheet } from "vuetify/lib";
import { Prop, Component } from "vue-property-decorator";

@Component({
  inheritAttrs: false,
})
class FPanel extends Vue {
  name = "FPanel";

  @Prop({ type: String, default: "low" }) elevation!: string;

  @Prop({ type: String, default: "16" }) padding!: string;

  get styles() {
    return {
      padding: `${this.padding}px`,
    };
  }

  render(h: CreateElement): VNode {
    const data: VNodeData = {
      style: { padding: `${this.padding}px` },
      class: ["f-panel", `elevation-${this.elevation}`],
    };
    return h(VSheet, data, [this.$slots.default]);
  }
}

export default FPanel;
