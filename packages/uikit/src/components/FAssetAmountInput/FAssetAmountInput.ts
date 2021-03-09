import "./FAssetAmountInput.scss";
import { Vue, Component, Model, Prop, PropSync } from "vue-property-decorator";
import { CreateElement, VNode } from "vue/types/umd";
import FNumberInput from "../FNumberInput";
import FMixinAssetLogo from "../FMixinAssetLogo";
import FAssetsSheet from "./FAssetsSheet";
import FBottomSheet from "../FBottomSheet";
import { VLayout, VBtn, VIcon } from "vuetify/lib";
import { mdiChevronDown, mdiHelpCircle } from "@mdi/js";
import { MixinAsset } from "./types";
import { $t } from "../../utils/helper";

@Component({
  inheritAttrs: false,
})
class FAssetAmountInput extends Vue {
  @Model("input") value!: string;

  @PropSync("asset")
  bindAsset!: MixinAsset | null;

  @Prop({ type: Boolean, default: true }) selectable!: boolean;

  @Prop({ type: Boolean, default: false }) border!: boolean;

  @Prop({ type: Array, default: () => [] }) assets!: MixinAsset[];

  sheet = false;

  handleSelectAsset(asset: MixinAsset) {
    this.bindAsset = asset;
    this.sheet = false;
  }

  handleClear() {
    this.bindAsset = null;
  }

  genActivator({ on }) {
    const slotActivator = this.$scopedSlots.activator;
    if (slotActivator) {
      return slotActivator({ on });
    }

    const h = this.$createElement;

    const activator = this.bindAsset
      ? this.genAssetSeleted()
      : this.genAssetPlaceholder();

    !this.selectable && delete on.click;
    return h("div", { staticClass: "f-asset-amount-input__activator", on }, [
      activator,
    ]);
  }

  genAssetSeleted() {
    const h = this.$createElement;

    const { logo, chainLogo, symbol, select_symbol, label } = this.bindAsset! || {};
    const displaySymbol = select_symbol || symbol;

    return [
      h(FMixinAssetLogo, { props: { logo, chainLogo, size: 32 } }),
      h(
        VLayout,
        {
          staticClass: "ml-2 mr-0 d-flex flex-column align-left",
        },
        [
          h("div", { staticClass: "font-weight-bold" }, [displaySymbol]),
          h(
            "div",
            { staticClass: "text--secondary f-caption", show: Boolean(label) },
            [label],
          ),
        ],
      ),
      this.selectable ? h(
        VBtn,
        {
          show: this.selectable,
          props: { "x-small": true, icon: true },
        },
        [h(VIcon, { props: { size: "20" } }, [mdiChevronDown])],
      ) : null,
    ];
  }

  genAssetPlaceholder() {
    const h = this.$createElement;
    const label = h(
      VIcon,
      { props: { color: "greyscale_4", size: 24 }, staticClass: "mr-1" },
      [mdiHelpCircle],
    );

    return [
      label,
      h(VIcon, { props: { size: "18" } }, [this.selectable ? mdiChevronDown : null])
    ];
  }

  genAssetSheet() {
    const h = this.$createElement;

    const assetSheet = this.$scopedSlots.assets;
    if (assetSheet) {
      return assetSheet({
        asset: this.value,
        assets: this.assets,
        on: {
          select: (val) => this.handleSelectAsset(val),
        },
      });
    }

    return h(FAssetsSheet, {
      props: {
        asset: this.value,
        assets: this.assets,
      },
      on: {
        select: (val) => this.handleSelectAsset(val),
      },
    });
  }

  render(h: CreateElement): VNode {
    return h(
      "div",
      {
        staticClass: "f-asset-amount-input",
        class: [this.border && "f-asset-amount-input--border"],
      },
      [
        h(
          FBottomSheet,
          {
            props: {
              value: this.sheet,
            },
            on: {
              change: (val) => (this.sheet = val),
            },
            scopedSlots: {
              activator: ({ on }) => {
                return this.genActivator({ on });
              },
            },
          },
          [
            h("div", { slot: "title" }, [$t(this, "select_asset")]),
            this.genAssetSheet(),
          ],
        ),
        h(FNumberInput, {
          attrs: { ...this.$attrs, "hide-details": true, solo: true },
          props: { value: this.value, solo: true, reverse: true },
          on: {
            ...this.$listeners,
            input: (val) => this.$emit("input", val),
          },
        }),
      ],
    );
  }
}

export default FAssetAmountInput;
export { FAssetAmountInput };
