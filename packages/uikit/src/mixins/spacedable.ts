import { PropType } from "vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import { convertToUnit } from "vuetify/lib/util/helpers";

export type NumberOrNumberString = PropType<string | number | undefined>;

@Component
export default class Spaceable extends Vue {
  @Prop({ type: [String, Number] as NumberOrNumberString })
  padding!: NumberOrNumberString;

  @Prop({ type: [String, Number] as NumberOrNumberString })
  margin!: NumberOrNumberString;

  get spaceableStyles() {
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
