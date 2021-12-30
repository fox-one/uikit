<template>
  <f-asset-amount-input
    v-model="value"
    placeholder="Input Amount"
    :assets="assets"
    :asset.sync="asset"
  >
    <template #assets="{ assets, asset, on }">
      <v-list style="max-height: 40vh; overflow: scroll">
        <v-list-item
          v-for="(item, index) in assets"
          :key="index"
          @click="() => on.select(item)"
        >
          <v-list-item-title :class="{ 'primary--text': asset.id === item.id }">
            {{ item.symbol }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </template>
  </f-asset-amount-input>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import data from "../data.json";

@Component
class AssetAmountInput extends Vue {
  value = "";

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

export default AssetAmountInput;
</script>
