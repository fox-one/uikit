import "./FActionBar.scss";

import mixins from "vuetify/src/util/mixins";

import Colorable from "vuetify/src/mixins/colorable";
import Measurable from "vuetify/src/mixins/measurable";
import Proxyable from "vuetify/src/mixins/proxyable";
import Scrollable from "vuetify/src/mixins/scrollable";
import Themeable from "vuetify/src/mixins/themeable";
import Elevatable from "vuetify/src/mixins/elevatable";
import Roundable from "vuetify/src/mixins/roundable";
import Spacedable from "../../mixins/spacedable";
import { factory as PositionableFactory } from "vuetify/src/mixins/positionable";
import { factory as ToggleableFactory } from "vuetify/src/mixins/toggleable";
import ButtonGroup from "vuetify/src/mixins/button-group";

import type { VNode, VNodeData } from "vue";

const baseMixins = mixins(
  Colorable,
  Measurable,
  ToggleableFactory("inputValue"),
  Proxyable,
  Scrollable,
  PositionableFactory(["fixed"]),
  ButtonGroup,
  Themeable,
  Roundable,
  Elevatable,
  Spacedable
);

/* @vue/component */
export default baseMixins.extend({
  name: "FActionBar",

  props: {
    tag: { type: String, default: "div" },
    activeClass: { type: String, default: "v-btn--active" },
    inputValue: { type: Boolean, default: true },
    rounded: { type: Boolean, default: true },
    elevation: { type: [String, Number], default: 2 },
    padding: { type: [String, Number], default: 16 },
    backgroundColor: String,
    hideOnScroll: Boolean,
    customContent: Boolean
  },

  data() {
    return {
      isActive: this.inputValue
    };
  },

  computed: {
    canScroll(): boolean {
      return (
        Scrollable.options.computed.canScroll.call(this) &&
        (this.hideOnScroll || !this.inputValue)
      );
    },
    classes(): object {
      return {
        ...this.roundedClasses,
        ...this.elevationClasses,
        "f-actionbar--fixed": this.fixed,
        "f-actionbar--custom-content": this.customContent,
        "f-actionbar--active": this.isActive
      };
    },
    styles(): object {
      return {
        ...this.measurableStyles,
        ...this.spaceableStyles
      };
    }
  },

  methods: {
    thresholdMet() {
      this.isActive = !this.isScrollingUp;
      this.$emit("update:input-value", this.isActive);
    },
    updateValue(val: any) {
      this.$emit("change", val);
    }
  },

  render(h): VNode {
    const { setBackgroundColor, setTextColor } = this;

    let data: VNodeData = {
      staticClass: "f-actionbar",
      class: this.classes,
      style: this.styles,
      props: {
        activeClass: this.activeClass,
        tag: this.tag,
        value: this.internalValue
      },
      on: {
        change: this.updateValue
      }
    };

    if (this.canScroll) {
      data.directives = data.directives || [];

      data.directives.push({
        arg: this.scrollTarget,
        name: "scroll",
        value: this.onScroll
      });
    }

    data = setBackgroundColor(this.backgroundColor, data);
    data = setTextColor(this.color, data);

    return h(ButtonGroup, data, this.$slots.default);
  }
});
