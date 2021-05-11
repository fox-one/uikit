<template>
  <f-bottom-sheet v-model="dialog" :title="meta.title" v-bind="$attrs">
    <template #activator="{ on }">
      <slot name="activator" :on="on">
        <f-asset-select-field
          :asset="asset"
          rounded
          @click.native.stop="on.click"
        />
      </slot>
    </template>

    <f-bottom-sheet-subtitle>
      <f-input
        v-model="filter"
        :label="meta.searchLabel"
        hide-details
        clearable
      />
    </f-bottom-sheet-subtitle>

    <slot
      name="assets"
      :asset="asset"
      :assets="filterAssets"
      :on="{ select: handleSelect }"
    >
      <f-asset-list
        :asset="asset"
        :assets="filterAssets"
        @select="handleSelect"
      />
    </slot>
  </f-bottom-sheet>
</template>

<script lang="ts">
import { Component, Vue, Prop, Model } from "vue-property-decorator";
import { FBottomSheet, FBottomSheetSubtitle } from "../FBottomSheet";
import FAssetList from "./FAssetList.vue";
import FAssetSelectField from "./FAssetSelectField.vue";
import FInput from "../FInput";
import { $t } from "../../utils/helper";

import type { Asset } from "./types";

@Component({
  name: "FAssetSelect",
  inheritAttrs: false,
  components: {
    FBottomSheet,
    FBottomSheetSubtitle,
    FAssetList,
    FAssetSelectField,
    FInput
  }
})
class FAssetSelect extends Vue {
  @Model("input") asset!: Asset | null;

  @Prop({ type: Array, default: () => [] }) assets!: Asset[];

  @Prop({ type: Boolean, default: true }) closeOnSelect!: boolean;

  dialog = false;

  filter = "";

  get meta() {
    return {
      title: $t(this, "select_asset"),
      searchLabel: $t(this, "search")
    };
  }

  get filterAssets() {
    const filter = this.filter?.toLowerCase() ?? "";

    return this.assets.filter((asset) => {
      const name = (asset?.name || "").toLowerCase();
      const symbol = (asset?.symbol || "").toLowerCase();

      return name.startsWith(filter) || symbol.includes(filter);
    });
  }

  handleSelect(asset: Asset) {
    if (asset.id !== this.asset?.id) {
      this.$emit("input", asset);

      if (this.closeOnSelect) {
        this.dialog = false;
      }
    }
  }
}
export default FAssetSelect;
</script>
