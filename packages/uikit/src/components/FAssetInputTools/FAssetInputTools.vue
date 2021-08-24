<template>
  <v-layout align-center class="f-asset-input-tools">
    <slot name="right">
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
        <span class="text--primary mr-1"> Bal. </span>

        <span color="primary" @click.stop="handleFill">
          {{ balance }}
        </span>
        <v-icon size="12" class="ml-1" @click.stop="handleFill">$fill</v-icon>
      </template>
    </slot>

    <v-spacer />
    <span class="greyscale_3--text"> ≈ {{ fiatAmount }} </span>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { VLayout, VIcon, VSpacer } from "vuetify/src/components";
import FButton from "../FButton";

@Component({
  name: "FAssetInputTools",
  components: {
    VLayout,
    VIcon,
    VSpacer,
    FButton
  }
})
class FAssetInputTools extends Vue {
  @Prop({ type: [String, Number], default: "" }) balance!: string;

  @Prop({ type: Boolean, default: false }) walletConnected!: boolean;

  @Prop({ type: [String, Number], default: "" }) fiatAmount!: boolean;

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
