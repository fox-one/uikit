import { Component, Vue, Prop } from "vue-property-decorator";
import { CreateElement, VNode } from "vue/types/umd";
import FMixinAssetLogo from "../FMixinAssetLogo";
import FBottomSheet from "../FBottomSheet";
import {
  VTextField,
  VListItem,
  VListItemContent,
  VListItemTitle,
  VListItemSubtitle,
  VVirtualScroll,
} from "vuetify/lib";
import { MixinAsset } from "./types";
import { $t } from "../../utils/helper";

@Component({
  inheritAttrs: false,
})
class FAssetsSheet extends Vue {
  @Prop({ type: Array, default: () => [] }) assets!: MixinAsset[];

  @Prop() asset!: MixinAsset | null;

  filter = "";

  sheet = false;

  get filterAssets() {
    return this.assets.filter((asset) => {
      const name = (asset?.name || "").toLowerCase();
      const symbol = (asset?.symbol || "").toLowerCase();
      const filter = this.filter.toLowerCase();
      return name.includes(filter) || symbol.includes(filter);
    });
  }

  handleSelect(asset) {
    if (this.asset && this.asset.id === asset.id) {
      this.$emit("select", null);
    } else {
      this.$emit("select", asset);
    }
    this.sheet = false;
  }

  genAssetItem(asset: MixinAsset) {
    const h = this.$createElement;

    const { logo, chainLogo, name, select_symbol, symbol, id } = asset;
    const isActive = this.asset && this.asset.id === id;

    return h(
      VListItem,
      {
        on: { click: () => this.handleSelect(asset) },
        props: {
          "input-value": isActive,
          "active-class": "primary--text",
        },
      },
      [
        h("div", { staticClass: "mr-2" }, [
          h(FMixinAssetLogo, { props: { logo, chainLogo, size: 40 } }),
        ]),
        h(VListItemContent, [
          h(VListItemTitle, [select_symbol || symbol]),
          h(VListItemSubtitle, [name]),
        ]),
      ],
    );
  }

  genList() {
    const h = this.$createElement;
    return h(VVirtualScroll, {
      props: { height: 420, "item-height": 60, items: this.filterAssets },
      scopedSlots: {
        default: ({ item }) => {
          return this.genAssetItem(item);
        },
      },
    });
  }

  render(h: CreateElement): VNode {
    const activator = this.$scopedSlots.activator;

    const filter = h(VTextField, {
      props: {
        value: this.filter,
        "hide-details": true,
        "single-line": true,
        clearable: true,
        label: $t(this, "search"),
      },
      slot: "subheader",
      on: { input: (val) => (this.filter = val) },
    });

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
            return (activator && activator({ on })) || null;
          },
        },
      },
      [
        h("div", { slot: "title" }, [$t(this, "select_asset")]),
        filter,
        this.genList(),
      ],
    );
  }
}

export default FAssetsSheet;
export { FAssetsSheet };
