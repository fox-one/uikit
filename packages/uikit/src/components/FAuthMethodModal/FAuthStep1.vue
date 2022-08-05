<template>
  <div class="f-auth-step1">
    <div class="text-center f-auth-methods__title">{{ labels[0] }}</div>

    <div class="pa-6 pt-2">
      <div class="f-auth-methods">
        <div
          v-for="(item, index) in items"
          :key="index"
          :style="{ 'background-color': item.bg }"
          class="f-auth-method"
          @click="handleAuth(item)"
          @mouseover="hoverIndex = index"
          @mouseleave="hoverIndex = -1"
        >
          <span class="mb-3">
            <v-img width="40" height="40" :src="item.logo" />
          </span>

          <span class="f-auth-method__label">{{ item.title }}</span>
        </div>
      </div>

      <div class="f-auth-hint mt-6">
        <v-icon size="16" color="warning" class="mr-2">$FIconHorn4P</v-icon>
        <span v-html="labels[2]"></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, PropSync } from "vue-property-decorator";
import { $t } from "../../utils/helper";
import { VImg, VIcon } from "vuetify/lib";

@Component({
  name: "FAuthStep1",
  inheritAttrs: false,
  components: {
    VImg,
    VIcon
  }
})
class FAuthStep1 extends Vue {
  @Prop({ type: Boolean, default: false }) fennec!: boolean;

  @Prop({ type: Boolean, default: false }) metamask!: boolean;

  @Prop({ type: String, default: "" }) title;

  @Prop({ default: () => ["fennec", "mixin"] }) wallets!: string[];

  @PropSync("step") bindStep;

  @PropSync("select") bindSelect;

  hoverIndex = -1;

  get builtInWallets() {
    const isDark = this.$vuetify.theme.dark;
    const grey = this.$vuetify.theme.currentTheme.greyscale_6;

    return [
      {
        needNextStep: !this.metamask,
        value: "metamask",
        title: "MetaMask",
        bg: isDark ? grey : "#FFEEDD",
        logo: "https://static.fox.one/image/logo_metamask@40x40.png"
      },
      {
        needNextStep: true,
        value: "mixin",
        title: "Mixin",
        bg: isDark ? grey : "#EBF8FF",
        logo: "https://static.fox.one/image/logo_mixin@40x40.png"
      },
      {
        needNextStep: true,
        value: "links",
        title: "Links",
        bg: isDark ? grey : "#EBF8FF",
        logo: "https://static.fox.one/image/logo_links@40x40.png"
      },
      {
        needNextStep: !this.fennec,
        value: "fennec",
        title: "Fennec",
        bg: isDark ? grey : "#E6E7FD",
        logo: "https://static.fox.one/image/logo_fennec@40x40.png"
      },
      {
        needNextStep: false,
        value: "walletconnect",
        title: "WalletConnect",
        bg: grey,
        logo: isDark
          ? "https://static.fox.one/image/logo_walletconnect_dark@40x40.png"
          : "https://static.fox.one/image/logo_walletconnect@40x40.png"
      }
    ];
  }

  get labels() {
    return [
      this.title || $t(this, "connect_wallet"),
      $t(this, "connect_wallet_subtitle"),
      $t(this, "gas_fee_hint")
    ];
  }

  get items() {
    return this.wallets
      .map((name) => {
        return this.builtInWallets.find((x) => x.value === name);
      })
      .filter((v) => !!v);
  }

  handleAuth(item) {
    if (!item.needNextStep) {
      this.$emit("close");
      this.$emit("auth", { type: item.value });
    } else {
      this.bindSelect = item.value;
      this.bindStep = 2;
    }
  }
}
export default FAuthStep1;
</script>
