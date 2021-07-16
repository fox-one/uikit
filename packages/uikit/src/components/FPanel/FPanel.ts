import "./FPanel.scss";

import { VSheet } from "vuetify/lib";
import { Component } from "vue-property-decorator";

@Component({
  inheritAttrs: false
})
class FPanel extends VSheet {
  name = "FPanel";

  classes() {
    return {
      ...VSheet.options.computed.classes.call(this)
    };
  }
}

export default FPanel;
