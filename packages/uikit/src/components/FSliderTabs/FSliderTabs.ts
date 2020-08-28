import "./FSliderTabs.scss";
import { Component, Vue, Watch, Model } from "vue-property-decorator";
import { CreateElement, VNode } from "vue/types/umd";
import { VTabs } from "vuetify/lib";

@Component
class FSliderTabs extends Vue {
  @Model("change") value!: number;

  mounted() {
    this.setSliderPosition();
  }

  @Watch("value")
  handleValueChange() {
    this.setSliderPosition();
  }

  setSliderPosition() {
    this.$nextTick(() => {
      const tabs: any = this.$refs.tabs;
      const slider: any = this.$refs.slider;
      if (!tabs || !slider) {
        return;
      }
      const activeTab = tabs.$el.querySelector(
        `.v-tab[data-value="${this.value}"]`,
      );
      if (!activeTab) {
        slider.style.display = "none";
        return;
      }
      const left = activeTab.offsetLeft;
      const width = activeTab.clientWidth;
      const sliderWidth = width * 0.4;
      const sliderLeft = (left + (width - sliderWidth) / 2).toFixed();
      slider.style.left = `${sliderLeft}px`;
      slider.style.width = `${sliderWidth}px`;
    });
  }

  render(h: CreateElement): VNode {
    return h(
      VTabs,
      {
        staticClass: "f-slider-tabs",
        on: this.$listeners,
        attrs: this.$attrs,
        ref: "tabs",
      },
      [
        this.$slots.tabs,
        h("div", {
          staticClass: "f-slider-tabs__slider primary",
          ref: "slider",
        }),
      ],
    );
  }
}

export default FSliderTabs;
export { FSliderTabs };
