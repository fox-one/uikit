import { Component, Vue, Prop } from "vue-property-decorator";
import { CreateElement, VNode } from "vue/types/umd";
import FMixinAssetLogo from "../FMixinAssetLogo";
import FInput from "../FInput";
import {
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

  filter: string | null = "";

  get filterAssets() {
    const filter = this.filter?.toLowerCase() ?? "";
    return this.assets.filter((asset) => {
      const name = (asset?.name || "").toLowerCase();
      const symbol = (asset?.symbol || "").toLowerCase();
      return name.startsWith(filter) || symbol.includes(filter);
    });
  }

  handleSelect(asset) {
    if (this.asset && this.asset.id === asset.id) {
      this.$emit("select", null);
    } else {
      this.$emit("select", asset);
    }
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
        h("div", { staticClass: "mr-2 d-flex" }, [
          h(FMixinAssetLogo, { props: { logo, chainLogo, size: 32 } }),
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
    const props = {
      value: this.filter,
      dense: true,
      label: $t(this, "search"),
    };
    const input = h(FInput, {
      props,
      staticClass: "ma-0 pa-4 pt-0",
      slot: "subheader",
      on: { input: (val) => (this.filter = val) },
    });

    return h("div", { staticClass: "px-0" }, [input, this.genList()]);
  }
}

export default FAssetsSheet;
export { FAssetsSheet };
