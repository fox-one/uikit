<template>
  <v-layout align-center class="f-asset-input-tools">
    <slot name="left">
      <f-button
        v-if="!walletConnected"
        text
        x-small
        color="primary"
        class="ml-n2"
        @click.stop="handleConnectWallet"
      >
        {{ text.connect_wallet }}
        <v-icon size="12" class="ml-1">$connect</v-icon>
      </f-button>

      <div v-else class="greyscale_3--text d-flex align-center">
        <span class="mr-1"> {{ text.balance }} </span>

        <span @click.stop="handleFill">
          {{ balance }}
        </span>
        <v-icon size="12" class="ml-1" @click.stop="handleFill">$fill</v-icon>
      </div>
    </slot>

    <v-spacer />

    <slot name="right">
      <template v-if="messages">
        <v-messages color="error" :value="messages" class="text-right" />
      </template>
      <template v-else>
        <span class="greyscale_3--text fiat-amount"> ≈ {{ fiatAmount }} </span>
      </template>
    </slot>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { VLayout, VIcon, VSpacer, VMessages } from "vuetify/src/components";
import FButton from "../FButton";
import { $t } from "../../utils/helper";

@Component({
  name: "FAssetInputTools",
  components: {
    VLayout,
    VIcon,
    VSpacer,
    FButton,
    VMessages
  }
})
class FAssetInputTools extends Vue {
  @Prop({ type: [String, Number], default: "" }) balance!: string;

  @Prop({ type: Boolean, default: false }) walletConnected!: boolean;

  @Prop({ type: [String, Number], default: "" }) fiatAmount!: boolean;

  @Prop() messages;

  get text() {
    return {
      balance: $t(this, "balance_short"),
      connect_wallet: $t(this, "connect_wallet")
    };
  }

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
  padding: 0 16px;
}

.fiat-amount {
  white-space: nowrap;
}
</style>
