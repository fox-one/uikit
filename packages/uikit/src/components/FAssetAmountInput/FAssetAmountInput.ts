import "./FAssetAmountInput.scss";
import { Vue, Component, Model, Prop, PropSync } from "vue-property-decorator";
import { CreateElement, VNode } from "vue/types/umd";
import FNumberInput from "../FNumberInput";
import FPanel from "../FPanel";
import FMixinAssetLogo from "../FMixinAssetLogo";
import FAssetsSheet from "./FAssetsSheet";
import { VLayout, VBtn, VIcon } from "vuetify/lib";
import { mdiChevronDown } from "@mdi/js";
import { MixinAsset } from "./types";

@Component({
  inheritAttrs: false,
})
class FAssetAmountInput extends Vue {
  @Model("input") value!: string;

  @PropSync("asset")
  bindAsset!: MixinAsset | null;

  @Prop({ default: true }) selectable!: boolean;

  @Prop({ default: false }) border!: boolean;

  @Prop({ type: Array, default: () => [] }) assets!: MixinAsset[];

  filter = "";

  handleSelectAsset(asset: MixinAsset) {
    this.bindAsset = asset;
  }

  handleClear() {
    this.bindAsset = null;
  }

  genActivator({ on }) {
    const h = this.$createElement;

    const activator = this.bindAsset
      ? this.genAssetSeleted()
      : this.genAssetPlaceholder();

    return h("div", { staticClass: "f-asset-amount-input__activator", on }, [
      activator,
    ]);
  }

  genAssetSeleted() {
    const h = this.$createElement;

    const { logo, chainLogo, symbol, select_symbol, label } = this.bindAsset!;
    const displaySymbol = select_symbol || symbol;

    return [
      h(FMixinAssetLogo, { props: { logo, chainLogo, size: 32 } }),
      h(
        VLayout,
        {
          staticClass: "mx-2 font-weight-bold d-flex flex-column align-center",
        },
        [
          h("div", { staticClass: "font-weight-bold" }, [displaySymbol]),
          h(
            "div",
            { staticClass: "text--secondary caption", show: Boolean(label) },
            [label],
          ),
        ],
      ),
      h(
        VBtn,
        {
          show: this.selectable,
          props: { "x-small": true, icon: true },
        },
        [h(VIcon, { props: { size: "20" } }, [mdiChevronDown])],
      ),
    ];
  }

  genAssetPlaceholder() {
    const h = this.$createElement;

    return [
      h("span", { staticClass: "overline" }, ["select"]),
      h(VIcon, { props: { size: "18" } }, [mdiChevronDown]),
    ];
  }

  render(h: CreateElement): VNode {
    return h(
      FPanel,
      {
        staticClass: "f-asset-amount-input",
        class: [this.border && "f-asset-amount-input--border"],
        props: { padding: "0" },
      },
      [
        h(FNumberInput, {
          attrs: { ...this.$attrs, "hide-details": true },
          props: { value: this.value },
          on: {
            input: (val) => this.$emit("input", val),
          },
        }),
        h(FAssetsSheet, {
          props: {
            assets: this.assets,
            asset: this.bindAsset,
          },
          on: {
            select: (asset) => this.handleSelectAsset(asset),
          },
          scopedSlots: {
            activator: ({ on }) => {
              return this.genActivator({ on });
            },
          },
        }),
      ],
    );
  }
}

export default FAssetAmountInput;
export { FAssetAmountInput };
