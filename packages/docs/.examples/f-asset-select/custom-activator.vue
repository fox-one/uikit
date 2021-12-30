<template>
  <f-asset-select v-model="asset" :assets="assets" label="slot for activator">
    <template #activator="{ on }">
      <v-layout justify-center>
        <f-button color="primary" @click="on.click">
          customize activator slot
        </f-button>
      </v-layout>
    </template>
  </f-asset-select>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import data from "../data.json";

@Component
class AssetSelect extends Vue {
  assets = data.map((asset) => {
    const chainAsset = data.find((a) => a.asset_id === asset.chain_id);

    return {
      id: asset.asset_id,
      symbol: asset.symbol || "",
      name: asset.name,
      logo: asset.icon_url,
      label: asset.label,
      chainLogo: chainAsset && chainAsset.icon_url
    };
  });

  asset = this.assets[0];
}
export default AssetSelect;
</script>
