<template>
  <f-asset-swap-form @switch="handleSwitch">
    <template #input="{ messages }">
      <f-asset-amount-input
        v-model="input.value"
        :asset.sync="input.asset"
        :assets="input.assets"
        :rules="rules.input"
        hide-details
        placeholder="Sell"
      >
        <template #tools>
          <f-asset-input-tools
            :wallet-connected="false"
            :messages="messages"
            fiat-amount="$12345"
          />
        </template>
      </f-asset-amount-input>
    </template>

    <template #output="{ messages }">
      <f-asset-amount-input
        v-model="output.value"
        :asset.sync="output.asset"
        :assets="output.assets"
        :rules="rules.output"
        hide-details
        placeholder="Received"
      >
        <template #tools>
          <f-asset-input-tools
            :wallet-connected="true"
            :balance="balance"
            fiat-amount="$12345"
            :messages="messages"
            @fill="handleFillOutput"
          />
        </template>
      </f-asset-amount-input>
    </template>
  </f-asset-swap-form>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import data from "../data.json";

@Component
class AssetSwapForm extends Vue {
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

  balance = "12.1231321";

  input: any = {
    value: "",
    asset: null,
    assets: []
  };

  output: any = {
    value: "",
    asset: null,
    assets: []
  };

  get rules() {
    return {
      input: [(v) => !!v || "Input is required"],
      output: [(v) => !!v || "Output is required"]
    };
  }

  mounted() {
    this.input.asset =
      this.assets[Math.floor(Math.random() * this.assets.length)];
    this.input.assets = this.assets;

    this.output.asset =
      this.assets[Math.floor(Math.random() * this.assets.length)];
    this.output.assets = this.assets;
  }

  handleSwitch() {
    const temp = this.input.asset;

    this.input.asset = this.output.asset;
    this.output.asset = temp;
  }

  handleFillOutput() {
    this.output.value = "12.1231321";
  }
}
export default AssetSwapForm;
</script>
