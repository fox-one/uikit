<template>
  <f-bottom-sheet v-model="dialog" :title="meta.title" v-bind="$attrs">
    <template #activator="{ on }">
      <slot name="activator" :on="on" :asset="asset">
        <f-asset-select-field :asset="asset" @click.native.stop="on.click">
          <template #placeholder>
            <span class="f-asset-select__placeholder">
              {{ meta.title }}
            </span>
          </template>
        </f-asset-select-field>
      </slot>
    </template>

    <f-bottom-sheet-subtitle>
      <f-search-input v-model="filter" hide-details clearable />
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
import FSearchInput from "../FSearchInput";
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
    FSearchInput
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

<style lang="scss" scoped>
.f-asset-select-field {
  height: 56px;
  border-radius: 8px;
  padding: 0 16px;
}

.f-asset-select__placeholder {
  font-weight: 500;
  font-size: 16px;
  color: var(--v-greyscale_4-base);
}
</style>
