<template>
  <v-row>
    <v-col cols="12">
      <f-asset-amount-input
        v-model="value"
        label="what kind of asset do you want"
        :assets="assets"
        :selectable="selectable"
        :asset.sync="asset"
        :precision="precision"
        border
      ></f-asset-amount-input>
    </v-col>
    <v-col cols="12">
      {{ value }}
      <br />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import assets from "@/assets/assets.json";

@Component
class AssetAmountInput extends Vue {
  value = "";

  asset = null;

  selectable = true;

  precision = 2;

  get assets() {
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
}
export default AssetAmountInput;
</script>
