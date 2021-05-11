<template>
  <v-container>
    <f-asset-swap-form @switch="handleSwitch">
      <template #input>
        <f-asset-amount-input
          v-model="input.value"
          :asset.sync="input.asset"
          :assets="input.assets"
          :rules="rules.input"
          hide-details
          label="Sell"
        >
          <template #tools>
            <f-asset-input-tools
              :wallet-connected="false"
              fiat-amount="$12345"
            />
          </template>
        </f-asset-amount-input>
      </template>

      <template #output>
        <f-asset-amount-input
          v-model="output.value"
          :asset.sync="output.asset"
          :assets="output.assets"
          :rules="rules.output"
          hide-details
          label="Received"
        >
          <template #tools>
            <f-asset-input-tools
              :wallet-connected="true"
              balance="12.1231321"
              fiat-amount="$12345"
            />
          </template>
        </f-asset-amount-input>
      </template>
    </f-asset-swap-form>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import data from "@/assets/assets.json";

const assets = data.map((asset) => {
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

@Component
class Playground extends Vue {
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
    this.input.asset = assets[Math.floor(Math.random() * assets.length)];
    this.input.assets = assets;

    this.output.asset = assets[Math.floor(Math.random() * assets.length)];
    this.output.assets = assets;
  }

  handleSwitch() {
    const temp = this.input.asset;

    this.input.asset = this.output.asset;
    this.output.asset = temp;
  }
}
export default Playground;
</script>
