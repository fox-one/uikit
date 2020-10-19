<template>
  <div>
    <v-row>
      <v-col cols="12">
        <f-asset-amount-input
          v-model="value1"
          label="what kind of asset do you want"
          :assets="assets"
          :selectable="selectable"
          :asset.sync="asset1"
          :precision="precision"
          disabled
          border
        >
        </f-asset-amount-input>
      </v-col>
      <v-col cols="12">
        {{ value1 }}
        <br />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <f-asset-amount-input
          v-model="value2"
          label="what kind of asset do you want"
          :assets="assets"
          :selectable="selectable"
          :asset.sync="asset2"
          :precision="precision"
          border
        >
          <template #assets="{ assets, asset, on}">
            <v-list>
              <v-list-item
                v-for="(item, index) in assets"
                :key="index"
                @click="() => on.select(item)"
              >
                <v-list-item-title
                  :class="{ 'primary--text': asset.id === item.id }"
                >
                  {{ item.symbol }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </template>
        </f-asset-amount-input>
      </v-col>
      <v-col cols="12">
        {{ value2 }}
        <br />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import assets from "@/assets/assets.json";

@Component
class AssetAmountInput extends Vue {
  value1 = "";

  value2 = "";

  asset1 = null;

  asset2 = null;

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
