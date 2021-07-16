<template>
  <div>
    <f-asset-select v-model="asset1" :assets="assets1" />
    <f-asset-select
      v-model="asset2"
      :assets="assets2"
      :activator-style="customStyle"
      label="自定义 activator 的样式"
      activator-class="custom-class"
    />
    <f-asset-select
      v-model="asset3"
      :assets="assets3"
      :activator-style="customStyle"
      label="slot for activator"
      activator-class="custom-class"
    >
      <template #activator="{ on }">
        <v-layout class="mt-10" justify-center>
          <f-button @click="on.click"> 自定义 activator slot </f-button>
        </v-layout>
      </template>
    </f-asset-select>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import assets from "@/assets/assets.json";

@Component
class AssetSelect extends Vue {
  asset1 = null;
  asset2 = this.assets2[0];
  asset3 = null;

  get assets1() {
    return assets.map((asset) => {
      const chainAsset = assets.find((a) => a.asset_id === asset.chain_id);

      return {
        id: asset.asset_id,
        symbol: asset.symbol,
        name: asset.name,
        logo: asset.icon_url,
        label: asset.label,
        chainLogo: chainAsset && chainAsset.icon_url
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
        chainLogo: chainAsset && chainAsset.icon_url
      };
    });
  }

  get assets3() {
    return assets.map((asset) => {
      const chainAsset = assets.find((a) => a.asset_id === asset.chain_id);

      return {
        id: asset.asset_id,
        symbol: asset.symbol,
        name: asset.name,
        logo: asset.icon_url,
        label: asset.label,
        chainLogo: chainAsset && chainAsset.icon_url
      };
    });
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
