import mixins from "vuetify/src/util/mixins";
import { convertToUnit } from "vuetify/src/util/helpers";

import "./FDivider.scss";

import VDivider from "vuetify/src/components/VDivider";

// Types
import { VNode } from "vue";

export default mixins(VDivider).extend({
  name: "FDivider",

  props: {
    size: { type: [String, Number], default: 0.5 },
    opacity: { type: [String, Number], default: 0.1 },
    color: { type: String }
  },

  computed: {
    styles(): object {
      return {
        borderWidth: `${convertToUnit(this.size)} 0 0 0`,
        opacity: this.opacity,
        borderColor: this.color
      };
    }
  },

  render(h): VNode {
    const render = VDivider.options.render.call(this, h);
    const classes = render.data?.class ?? {};

    render.data = {
      ...render.data,
      style: this.styles,
      class: { ...classes, "f-divider": true }
    };

    return render;
  }
});
