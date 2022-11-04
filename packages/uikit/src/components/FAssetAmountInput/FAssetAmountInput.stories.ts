import { Meta, StoryFn } from "@storybook/vue";
import FAssetAmountInput from "./FAssetAmountInput";
import FAssetInputTools from "../FAssetInputTools";
import assets from "../../data/asset.json";

export default {
  title: "FAssetAmountInput",
  component: { FAssetAmountInput }
} as Meta<typeof FAssetAmountInput>;

const Template: StoryFn = (args, { argTypes }) => ({
  components: { FAssetAmountInput },
  props: Object.keys(argTypes),
  data: () => {
    return {
      asset: null,
      amount: ""
    };
  },
  computed: {
    assets: () => {
      return assets.map((asset) => {
        const chainAsset = assets.find((a) => a.asset_id === asset.chain_id);

        return {
          id: asset.asset_id,
          symbol: asset.symbol || "",
          name: asset.name,
          logo: asset.icon_url,
          label: asset.label,
          chainLogo: chainAsset && chainAsset.icon_url
        };
      });
    }
  },
  template: `
    <FAssetAmountInput v-model="amount" :asset.sync="asset" placeholder="Input Amount" :assets="assets" v-bind="$props"></FAssetAmountInput>
  `
});

export const Default = Template.bind({});
Default.args = {};

export const WithDetails = (args, { argTypes }) => ({
  components: { FAssetAmountInput, FAssetInputTools },
  props: Object.keys(argTypes),
  data: () => {
    return {
      asset: null,
      amount: ""
    };
  },
  computed: {
    assets: () => {
      return assets.map((asset) => {
        const chainAsset = assets.find((a) => a.asset_id === asset.chain_id);

        return {
          id: asset.asset_id,
          symbol: asset.symbol || "",
          name: asset.name,
          logo: asset.icon_url,
          label: asset.label,
          chainLogo: chainAsset && chainAsset.icon_url
        };
      });
    }
  },
  template: `
    <FAssetAmountInput v-model="amount" :asset.sync="asset" placeholder="Input Amount" :assets="assets" v-bind="$props">
      <template #tools="{ messages }">
        <FAssetInputTools
          :wallet-connected="true"
          balance="1,000"
          fiat-amount="$1,000"
          :messages="messages"
          :fillable="true"
        ></FAssetInputTools>
      </template>
    </FAssetAmountInput>
  `
});
