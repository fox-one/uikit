import "./FPanel.scss";

import { VSheet } from "vuetify/lib";
import Roundedable from "vuetify/lib/mixins/roundable";
import Spacedable from "../../mixins/spacedable";

import { PropType } from "vue";
import { Component, Prop, Mixins } from "vue-property-decorator";

export type NumberOrNumberString = PropType<string | number | undefined>;

@Component({
  name: "FPanel",
  inheritAttrs: false
})
class FPanel extends Mixins(VSheet, Spacedable, Roundedable) {
  @Prop({ type: [String, Number], default: 0 })
  elevation!: string | number;

  @Prop({ type: [String, Boolean], default: true })
  declare rounded: string | boolean;

  @Prop({ type: [String, Number], default: 16 })
  declare padding: string | number;

  get classes() {
    return {
      ...VSheet.options.computed.classes.call(this),
      ...Roundedable.options.computed.roundedClasses.call(this)
    };
  }

  get styles() {
    return {
      ...VSheet.options.computed.styles.call(this),
      ...Spacedable.options.computed.spaceableStyles.call(this)
    };
  }
}

export default FPanel;
