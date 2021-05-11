import Vue, { PropType } from "vue";
import { convertToUnit } from "vuetify/src/util/helpers";

export type NumberOrNumberString = PropType<string | number | undefined>;

export default Vue.extend({
  name: "Spaceable",

  props: {
    padding: { type: [String, Number] as NumberOrNumberString },
    margin: { type: [String, Number] as NumberOrNumberString }
  },

  computed: {
    spaceableStyles(): object {
      const styles: Record<string, string> = {};

      const padding = convertToUnit(this.padding);
      const margin = convertToUnit(this.margin);

      if (padding) {
        styles.padding = padding;
      }

      if (margin) {
        styles.margin = margin;
      }

      return styles;
    }
  }
});
