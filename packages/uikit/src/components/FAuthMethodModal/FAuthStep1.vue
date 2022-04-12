<template>
  <div class="f-auth-step1">
    <div class="text-center f-auth-methods__title">{{ labels[0] }}</div>

    <div class="text-center greyscale_3--text f-auth-methods__subtitle">
      {{ labels[1] }}
    </div>

    <div class="f-auth-methods">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="f-auth-method"
        @click="handleAuth(item)"
        @mouseover="hoverIndex = index"
        @mouseleave="hoverIndex = -1"
      >
        <span class="mb-3">
          <v-icon
            v-if="hoverIndex == index"
            class="f-auth-method__icon"
            color="greyscale_7"
          >
            $arrowRight
          </v-icon>
          <v-img v-else width="88" height="68" :src="item.logo" />
        </span>

        <span class="f-auth-method__label">{{ item.title }}</span>
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
  @Prop({ type: Boolean, default: false }) fennec;

  @Prop({ type: String, default: "" }) title;

  @Prop({ default: () => [] }) wallets!: Array<string>;

  @PropSync("step") bindStep;

  @PropSync("select") bindSelect;

  hoverIndex = -1;

  builtInWallets = {
    fennec: {
      avaliable: false,
      value: "fennec",
      title: "Fennec",
      logo: "https://static.fox.one/image/logo_fennec@88x68.png"
    },
    mixin: {
      avaliable: false,
      value: "mixin",
      title: "Mixin Messenger",
      logo: "https://static.fox.one/image/logo_mixin@88x68.png"
    },
    links: {
      avaliable: false,
      value: "links",
      title: "Links",
      logo: "https://static.fox.one/image/logo_links@88x68.png"
    }
  };

  get labels() {
    return [
      this.title || $t(this, "connect_wallet"),
      $t(this, "connect_wallet_subtitle")
    ];
  }

  get items() {
    if (this.wallets?.length === 0) {
      return [this.builtInWallets.fennec, this.builtInWallets.mixin];
    }

    if (this.fennec) {
      this.builtInWallets.fennec.avaliable = true;
    }

    const ret: Array<any> = [];

    for (let ix = 0; ix < this.wallets.length; ix++) {
      const name = this.wallets[ix];

      if (this.builtInWallets[name]) {
        ret.push(this.builtInWallets[name]);
      }
    }

    return ret;
  }

  handleAuth(item) {
    if (item.avaliable) {
      this.$emit("close");
      this.$emit("auth", { type: "fennec" });
    } else {
      this.bindSelect = item.value;
      this.bindStep = 2;
    }
  }
}
export default FAuthStep1;
</script>
