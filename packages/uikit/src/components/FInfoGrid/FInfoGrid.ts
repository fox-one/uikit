import "./FInfoGrid.scss";
import { Component, Vue, Prop } from "vue-property-decorator";
import { CreateElement, VNode } from "vue/types/umd";
import { VBtn, VImg } from "vuetify/lib";
import { debounce } from "../../utils/helper";

const lightIcon = require("../../assets/images/list-arrow-light.svg");
const darkIcon = require("../../assets/images/list-arrow-dark.svg");

@Component
class FInfoGrid extends Vue {
  @Prop({ type: Number, default: 3 }) windowSize!: number;

  offset = 0;

  get reachHead() {
    return this.offset >= 0;
  }

  get reachTail() {
    return this.offset <= 0 - this.windowSize + 2;
  }

  genMask(h: CreateElement, direction: string): VNode {
    return h(
      "div",
      {
        staticClass: `f-info-grid-scroll-mask f-info-grid-scroll-mask-${direction}`,
      },
      [],
    );
  }

  genBtn(h: CreateElement, direction: string): VNode {
    return h(
      VBtn,
      {
        staticClass: `f-info-grid-scroll-btn f-info-grid-scroll-btn-${direction}`,
        props: { rounded: true, depressed: true, width: 16, height: 16 },
        on: {
          click: () => {
            this.offset += direction === "left" ? 1 : -1;
          },
        },
      },
      [
        h(
          VImg,
          {
            staticClass: "f-info-grid-scroll-btn-icon",
            props: {
              eager: true,
              aspectRatio: 0.3,
              src: (this as any).$vuetify.theme.dark ? darkIcon : lightIcon,
            },
          },
          [],
        ),
      ],
    );
  }

  sliceWidth = 0;

  updateSizes() {
    const fInfoGridWidth = (this.$refs["f-info-grid"] as Element)?.clientWidth;
    this.sliceWidth = fInfoGridWidth / 2;
    let itemWidth = fInfoGridWidth / 2;
    if (fInfoGridWidth >= 768) itemWidth = fInfoGridWidth * 0.3;
    if (fInfoGridWidth >= 1200) itemWidth = fInfoGridWidth * 0.25;
    document.body.style.setProperty(
      "--v-f-info-grid-item-width",
      `${itemWidth}px`,
    );
  }

  resizeObserver = debounce(this.updateSizes, 200);

  mounted() {
    this.updateSizes();
    window.addEventListener("resize", this.resizeObserver);
  }

  beforeDestroyed() {
    window.removeEventListener("resize", this.resizeObserver);
  }

  render(h: CreateElement): VNode {
    return h(
      "div",
      {
        ref: "f-info-grid",
        staticClass: "f-info-grid",
        attrs: this.$attrs,
        props: {
          ...this.$attrs,
        },
        on: this.$listeners,
      },
      [
        h(
          "div",
          {
            staticClass: "f-info-grid-inner pt-2",
            style: {
              transform: `translateX(${this.offset * this.sliceWidth}px)`,
              width: `${this.sliceWidth * this.windowSize}px`,
            },
            hook: {},
          },
          [this.$slots.default],
        ),
        this.reachHead ? null : this.genMask(h, "left"),
        this.reachHead ? null : this.genBtn(h, "left"),
        this.reachTail ? null : this.genMask(h, "right"),
        this.reachTail ? null : this.genBtn(h, "right"),
      ],
    );
  }
}

export default FInfoGrid;
export { FInfoGrid };
