import { Component, Vue, Prop } from "vue-property-decorator";
import { CreateElement, VNode } from "vue/types/umd";
import FMixinAssetLogo from "../FMixinAssetLogo";
import {
  VTextField,
  VListItem,
  VListItemContent,
  VListItemTitle,
  VListItemSubtitle,
  VVirtualScroll,
} from "vuetify/lib";
import { MixinAsset } from "./types";
import { mdiClose } from "@mdi/js";
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
    const filter = h(VTextField, {
      staticClass: "ma-0 pa-3 pt-0",
      props: {
        value: this.filter,
        hideDetails: true,
        singleLine: true,
        clearable: true,
        clearIcon: mdiClose,
        label: $t(this, "search"),
      },
      slot: "subheader",
      on: { input: (val) => (this.filter = val) },
    });

    return h("div", { staticClass: "px-3" }, [filter, this.genList()]);
  }
}

export default FAssetsSheet;
export { FAssetsSheet };
