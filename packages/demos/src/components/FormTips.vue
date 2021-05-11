<template>
  <v-row>
    <v-col cols="12">
      <v-form>
        <f-asset-amount-input
          v-model="value"
          label="what kind of asset do you want"
          :assets="assets"
          :selectable="selectable"
          :asset.sync="asset"
          :precision="precision"
        ></f-asset-amount-input>
        <f-form-tips
          :tips="tips"
          :max="2"
          balance="121212"
          @click:balance="handleClickBalance"
        >
          <template #action>
            <v-btn outlined rounded small color="primary"> Swap </v-btn>
          </template>
        </f-form-tips>
        <f-asset-amount-input
          v-model="value"
          label="what kind of asset do you want"
          :assets="assets"
          :selectable="selectable"
          :asset.sync="asset"
          :precision="precision"
        ></f-asset-amount-input>
      </v-form>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import assets from "@/assets/assets.json";
import { CreateElement, VNode } from "vue";

const Balance = Vue.extend({
  name: "Balance",
  props: { balance: { type: String, default: "12.212" } },
  render(h: CreateElement): VNode {
    return h(
      "div",
      {
        staticClass: "balance-component",
        on: {
          click: () => {
            this.$emit("click:balance", this.balance);
          }
        }
      },
      [this.balance]
    );
  }
});

Vue.component("balance", Balance);

@Component
class FormTips extends Vue {
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
        chainLogo: chainAsset && chainAsset.icon_url
      };
    });
  }

  get tips() {
    return [
      {
        text: "这是一条错误消息",
        error: true
      },
      {
        component: "balance"
      },
      {
        text: "手续费：1 BTC"
      },
      {
        text: "手续费：1.23 BTC",
        hide: true
      },
      {
        text: "最小值：100 BTC"
      },
      {
        text: "这是一条很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长"
      }
    ];
  }

  handleClickBalance(balance) {
    this.value = balance;
  }
}
export default FormTips;
</script>
