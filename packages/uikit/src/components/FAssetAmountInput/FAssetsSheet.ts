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
import { AssetItem } from "./FAssetAmountInput";

@Component
class FAssetsSheet extends Vue {
  @Prop() assets!: AssetItem[];

  @Prop() asset!: AssetItem;

  filter = "";

  sheet = false;

  get filterAssets() {
    return this.assets.filter((asset) => {
      const name = (asset.name || "").toLowerCase();
      const filter = this.filter.toLowerCase();
      return name.includes(filter);
    });
  }

  handleSelect(asset) {
    this.$emit("select", asset);
    this.sheet = false;
  }

  genAssetItem(asset: AssetItem) {
    const h = this.$createElement;

    const { logo, chainLogo, name, select_symbol, symbol } = asset;
    const displaySymbol = select_symbol || symbol;

    return h(
      VListItem,
      {
        staticClass: "pa-0",
        on: { click: () => this.handleSelect(asset) },
      },
      [
        h("div", { staticClass: "mr-2" }, [
          h(FMixinAssetLogo, { props: { logo, chainLogo, size: 40 } }),
        ]),
        h(VListItemContent, [
          h(VListItemTitle, [displaySymbol]),
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
    const activator = this.$scopedSlots.activator!;
    const $t = (key: string) => this.$vuetify.lang.t("$vuetify.uikit." + key);

    const filter = h(VTextField, {
      props: {
        value: this.filter,
        "hide-details": true,
        "single-line": true,
        clearable: true,
        label: $t("search"),
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
            return activator({ on });
          },
        },
      },
      [
        h("div", { slot: "title" }, [$t("select_asset")]),
        filter,
        this.genList(),
      ],
    );
  }
}

export default FAssetsSheet;
export { FAssetsSheet };
