<template>
  <v-layout align-center class="f-asset-input-tools px-2">
    <f-button
      v-if="!walletConnected"
      text
      x-small
      color="primary"
      @click.stop="handleConnectWallet"
    >
      Connect Wallet
      <v-icon size="12" class="ml-1">$connect</v-icon>
    </f-button>

    <template v-else>
      <f-button text x-small color="primary" @click.stop="handleFill">
        <span class="text--primary mr-1"> Bal. </span>
        {{ balance }}
        <v-icon size="12" class="ml-1">$fill</v-icon>
      </f-button>
    </template>

    <v-spacer />
    <span class="greyscale_3--text"> ≈ {{ fiatAmount }} </span>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "FAssetInputTools"
})
class FAssetInputTools extends Vue {
  @Prop({ type: [String, Number], default: "" }) balance!: string;

  @Prop({ type: Boolean, default: false }) walletConnected!: boolean;

  @Prop({ type: String, default: "" }) fiatAmount!: boolean;

  handleConnectWallet() {
    this.$emit("connect-wallet");
  }

  handleFill() {
    this.$emit("fill", this.balance);
  }
}
export default FAssetInputTools;
</script>

<style lang="scss" scoped>
.f-asset-input-tools {
  font-size: 12px;
  font-weight: 400;
}
</style>
