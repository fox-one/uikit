<template>
  <f-asset-amount-input
    v-model="value"
    :asset.sync="asset"
    :assets="assets"
    fullfilled
    hide-details
    placeholder="Input Amount"
  >
    <template #tools="{ messages }">
      <f-asset-input-tools
        :wallet-connected="true"
        :balance="balance"
        fiat-amount="$12.12"
        :messages="messages"
        @fill="handleFill"
      />
    </template>
  </f-asset-amount-input>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import data from "../data.json";

@Component
class AssetAmountInput extends Vue {
  value = "";

  balance = "12.12";

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

  handleFill() {
    this.value = this.balance;
  }
}

export default AssetAmountInput;
</script>
