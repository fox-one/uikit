import "./FTabs.scss";

import mixins from "vuetify/src/util/mixins";

import { VTabs } from "vuetify/src/components";

export default mixins(VTabs).extend({
  name: "FTabs",

  props: {
    sliderSize: {
      type: [Number, String],
      default: 4
    },
    sliderLength: {
      type: [Number, String],
      default: 40
    },
    disableSliderLength: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    classes() {
      return {
        ...VTabs.options.computed.classes.call(this),
        "f-tabs": true
      };
    }
  },

  methods: {
    callSlider() {
      if (
        this.hideSlider ||
        !this.$refs.items ||
        !this.$refs.items.selectedItems.length
      ) {
        this.slider.width = 0;

        return false;
      }

      this.$nextTick(() => {
        // Give screen time to paint
        const activeTab = this.$refs.items.selectedItems[0];

        /* istanbul ignore if */
        if (!activeTab || !activeTab.$el) {
          this.slider.width = 0;
          this.slider.left = 0;

          return;
        }

        const el = activeTab.$el as HTMLElement;
        const length = Number(this.sliderLength);
        const size = Number(this.sliderSize);

        if (this.disableSliderLength) {
          this.slider = {
            height: !this.vertical ? Number(this.sliderSize) : el.scrollHeight,
            left: this.vertical ? 0 : el.offsetLeft,
            right: this.vertical ? 0 : el.offsetLeft + el.offsetWidth,
            top: el.offsetTop,
            width: this.vertical ? Number(this.sliderSize) : el.scrollWidth
          };

          return true;
        }

        if (this.vertical) {
          const gap = Math.max(0, Math.floor((el.scrollHeight - length) / 2));

          this.slider = {
            height: length || el.scrollHeight,
            left: 0,
            right: 0,
            top: el.offsetTop + gap,
            width: size
          };
        } else {
          const gap = Math.max(0, Math.floor((el.offsetWidth - length) / 2));

          this.slider = {
            height: size,
            left: el.offsetLeft + gap,
            right: el.offsetLeft + el.offsetWidth - gap,
            top: el.offsetTop,
            width: length
          };
        }
      });

      return true;
    }
  }
});
