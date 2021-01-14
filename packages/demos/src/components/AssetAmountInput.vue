<template>
  <div>
    <v-row>
      <v-col cols="12">
        <div class="overline">Disabled</div>
        <f-asset-amount-input
          v-model="value1"
          label="Disabled"
          :assets="assets"
          :selectable="selectable"
          :asset.sync="asset1"
          :precision="precision"
          disabled
          border
        >
        </f-asset-amount-input>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <div class="overline">Normal</div>
        <f-asset-amount-input
          v-model="value2"
          label="Amount"
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
        You have selected {{ value2 }} {{ asset3.symbol }}
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div class="overline">Combine two w/ a small button</div>
        <f-asset-amount-input
          v-model="value3"
          label="Pay amount"
          :assets="assets"
          :selectable="selectable"
          :asset.sync="asset3"
          :precision="precision"
        >
        </f-asset-amount-input>
        <div class="swap-pos-btn-wrapper">
          <v-btn
            class="swap-pos-btn"
            color="greyscale_5"
            depressed
            rounded
            @click="swapPos"
          >
            <v-icon color="primary">{{ icons.mdiSwapVertical }}</v-icon>
          </v-btn>
        </div>
        <f-asset-amount-input
          v-model="value4"
          label="Obtain amount"
          :assets="assets"
          :selectable="selectable"
          :asset.sync="asset4"
          :precision="precision"
        >
        </f-asset-amount-input>
      </v-col>
      <v-col cols="12">
        From {{ value3 }} {{ asset3.symbol }} to {{ value4 }}
        {{ asset4.symbol }}
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import assets from "@/assets/assets.json";
import { mdiSwapVertical } from "@mdi/js";

@Component
class AssetAmountInput extends Vue {
  icons = {
    mdiSwapVertical,
  };

  value1 = "";

  value2 = "";

  asset1 = null;

  asset2 = null;

  value3 = "";

  value4 = "";

  asset3: any = null;

  asset4: any = null;

  selectable = true;

  precision = 4;

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

  mounted() {
    this.asset3 = this.assets[Math.floor(Math.random() * this.assets.length)];
    this.asset4 = this.assets[Math.floor(Math.random() * this.assets.length)];
  }

  swapPos() {
    const tmp = Object.assign({}, this.asset3);
    this.asset3 = Object.assign({}, this.asset4);
    this.asset4 = Object.assign({}, tmp);
  }
}
export default AssetAmountInput;
</script>

<style lang="scss" scoped>
.swap-pos-btn-wrapper {
  padding-left: 16px;
  margin-top: -14px;
  margin-bottom: -14px;
  .swap-pos-btn {
    width: 36px;
    height: 36px;
    min-width: 36px !important;
    padding: 0 !important;
  }
}
</style>
