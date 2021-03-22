import "./FAssetSelect.scss";
import FAssetsSheet from "./FAssetsSheet";
import { Component, Vue, Prop, Model } from "vue-property-decorator";
import { CreateElement, VNode } from "vue/types/umd";
import { VSheet, VFlex, VBtn, VIcon, VLayout } from "vuetify/lib";
import { mdiChevronRight } from "@mdi/js";
import FMixinAssetLogo from "../FMixinAssetLogo";
import FBottomSheet from "../FBottomSheet";
import { MixinAsset } from "./types";
import { $t } from "../../utils/helper";

@Component
class FAssetSelect extends Vue {
  @Model("input") value!: MixinAsset | null;

  @Prop({ type: Array, default: () => [] }) assets!: MixinAsset[];

  @Prop({ type: String, default: "" }) label!: string;

  @Prop({ type: Boolean, default: false }) border!: boolean;

  @Prop({ type: String, default: "" }) activatorClass!: string;

  sheet = false;

  handleSelectAsset(asset: MixinAsset) {
    this.$emit("input", asset);
    this.sheet = false;
  }

  genAssetInfo() {
    if (!this.value) {
      return null;
    }

    const h = this.$createElement;
    const asset = this.value || {};
    const { select_symbol, symbol, name, logo, chainLogo } = asset;

    return h(VLayout, [
      h(FMixinAssetLogo, {
        staticClass: "mr-2 align-self-center",
        props: { size: 32, logo, chainLogo },
      }),
      h(VFlex, [
        h("div", { staticClass: "font-weight-bold" }, [
          select_symbol || symbol,
        ]),
        h("div", { staticClass: "f-caption text--secondary" }, [name]),
      ]),
    ]);
  }

  genActivator({ on }) {
    const h = this.$createElement;

    const label = h(
      "div",
      {
        staticClass: "f-asset-selector__label",
        class: [this.value && "f-asset-selector__label--active"],
      },
      [this.label || $t(this, "select_asset")],
    );

    const arrow = h(
      VBtn,
      {
        staticClass: "f-asset-selector__arrow",
        props: { small: true, icon: true },
      },
      [h(VIcon, { props: { size: 16 } }, [mdiChevronRight])],
    );

    return h(
      VSheet,
      {
        staticClass: "f-asset-selector",
        class: [this.border && "f-asset-selector--border", this.activatorClass],
        on,
      },
      [this.genAssetInfo(), label, arrow],
    );
  }

  render(h: CreateElement): VNode {
    return h(
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
        h(FAssetsSheet, {
          props: {
            asset: this.value,
            assets: this.assets,
          },
          on: {
            select: (val) => this.handleSelectAsset(val),
          },
        }),
      ],
    );
  }
}

export default FAssetSelect;
