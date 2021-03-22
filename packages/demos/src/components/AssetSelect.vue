<template>
  <div>
    <f-asset-select v-model="asset1" :assets="assets1" />
    <f-asset-select
      v-model="asset2"
      :assets="assets2"
      :asset.sync="assets2[0]"
      label="自定义 activator 的样式"
      activatorClass="custom-class"
      :activatorStyle="customStyle"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import assets from "@/assets/assets.json";

@Component
class AssetSelect extends Vue {
  asset1 = null;

  asset2 = null;

  get assets1() {
    return assets.map((asset) => {
      const chainAsset = assets.find((a) => a.asset_id === asset.chain_id);
      return {
        id: asset.asset_id,
        symbol: asset.symbol,
        name: asset.name,
        logo: asset.icon_url,
        label: asset.label,
        chainLogo: chainAsset && chainAsset.icon_url,
      };
    });
  }

  get assets2() {
    return assets.map((asset) => {
      const chainAsset = assets.find((a) => a.asset_id === asset.chain_id);
      return {
        id: asset.asset_id,
        symbol: asset.symbol,
        name: asset.name,
        logo: asset.icon_url,
        label: asset.label,
        chainLogo: chainAsset && chainAsset.icon_url,
      };
    });
  }

  get customStyle() {
    return { "background-color": "#f5f5f5 !important" };
  }
}
export default AssetSelect;
</script>
<style lang="scss" scoped>
::v-deep {
  .custom-class {
    border-radius: 8px !important;
  }
}
</style>
