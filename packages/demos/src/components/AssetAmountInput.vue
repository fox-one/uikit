<template>
  <div>
    <f-panel class="mb-4">
      <div class="f-caption mb-2">Custom Activator</div>
      <f-asset-amount-input
        v-model="value0"
        :asset.sync="asset0"
        label="activator"
        :precision="10"
        border
        @blur="handleBlur($event)"
      >
        <template #activator>
          <f-mixin-asset-logo
            :logo="asset0.logo"
            :chain-logo="asset0.chainLogo"
            size="32"
            class="ml-2"
          ></f-mixin-asset-logo>
        </template>
      </f-asset-amount-input>
      <div class="f-caption mb-2">Disabled</div>
      <f-asset-amount-input
        v-model="value1"
        label="Disabled"
        :assets="assets"
        :selectable="false"
        :asset.sync="asset1"
        :precision="precision"
        disabled
        border
      >
      </f-asset-amount-input>
      <div class="f-caption mb-2 mt-2">Normal</div>
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
      <p class="mt-4 f-body-2">
        You have selected {{ value2 }} {{ asset3.symbol }}
      </p>
    </f-panel>

    <f-panel>
      <div class="f-caption mb-2">Combine two w/ a small button</div>
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
          color="greyscale_6"
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
      <f-button type="primary" block class="mt-4">Button</f-button>
      <p class="mt-4 f-body-2">
        From {{ value3 }} {{ asset3.symbol }} to {{ value4 }}
        {{ asset4.symbol }}
      </p>
    </f-panel>
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

  value0 = "";

  value1 = "";

  value2 = "";

  asset0: any = null;

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
    this.asset0 = this.assets[Math.floor(Math.random() * this.assets.length)];
    this.asset1 = this.assets[Math.floor(Math.random() * this.assets.length)];
    this.asset3 = this.assets[Math.floor(Math.random() * this.assets.length)];
    this.asset4 = this.assets[Math.floor(Math.random() * this.assets.length)];
  }

  swapPos() {
    const tmp = Object.assign({}, this.asset3);
    this.asset3 = Object.assign({}, this.asset4);
    this.asset4 = Object.assign({}, tmp);
  }

  handleBlur() {
    alert("user blur!");
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
