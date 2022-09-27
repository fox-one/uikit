<template>
  <div>asdfa</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { VLayout, VIcon, VSpacer, VMessages } from "vuetify/src/components";
// import FButton from "../FButton";
import { $t } from "../../utils/helper";

@Component({
  name: "FAssetInputTools",
  components: {
    VLayout,
    VIcon,
    VSpacer,
    // FButton,
    VMessages
  }
})
class FAssetInputTools extends Vue {
  @Prop({ type: [String, Number], default: "" }) balance!: string;

  @Prop({ type: Boolean, default: false }) walletConnected!: boolean;

  @Prop({ type: [String, Number], default: "" }) fiatAmount!: boolean;

  @Prop({ type: Boolean, default: false }) disabled!: boolean;

  @Prop({ type: Boolean, default: true }) fillable!: boolean;

  @Prop({ type: String, default: "" }) balanceLabel!: string;

  @Prop() messages;

  get showMessages() {
    return this.messages && this.messages?.length > 0;
  }

  get text() {
    return {
      balance: this.balanceLabel || $t(this, "balance_short"),
      connect_wallet: $t(this, "connect_wallet")
    };
  }

  handleConnectWallet() {
    this.$emit("connect-wallet");
  }

  handleFill() {
    if (this.fillable) {
      this.$emit("fill", this.balance);
    }
  }
}
export default FAssetInputTools;
</script>

<style lang="scss" scoped>
.f-asset-input-tools {
  font-size: 12px;
  font-weight: 500;
  padding: 0 16px;
  line-height: 1;
}

.fiat-amount {
  white-space: nowrap;
}

.balance-text--fillable {
  cursor: pointer;
  display: flex;
  align-items: center;
}
</style>
