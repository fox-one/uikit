<template>
  <f-bottom-sheet
    v-model="dialog"
    wapper-in-desktop="dialog"
    :title="labels[0]"
  >
    <template #activator>
      <slot name="activator" :on="{ click: onClick }"></slot>
    </template>

    <f-list-item
      v-for="(item, index) in items"
      :key="index"
      :title="item.title"
      :subtitle="item.subtitle"
      @click="handleAuth(item)"
    >
      <template #head>
        <v-avatar size="32">
          <v-img :src="item.logo" />
        </v-avatar>
      </template>
      <template v-if="!item.avaliable" #tail>
        <f-button small color="primary">
          {{ labels[1] }}
        </f-button>
      </template>
    </f-list-item>
  </f-bottom-sheet>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import FBottomSheet from "../FBottomSheet";
import FListItem from "../FList/FListItem";
import { VAvatar, VImg } from "vuetify/lib";
import { $t, getBrowser } from "../../utils/helper";
import { isMixin } from "@foxone/utils/mixin";

import fennecLogo from "../../assets/images/wallet_fennec.png";
import mmLogo from "../../assets/images/wallet_mm.png";

@Component({
  name: "FAuthMethodModal",
  components: {
    FBottomSheet,
    FListItem,
    VAvatar,
    VImg
  }
})
class FAuthMethodModal extends Vue {
  @Prop({ type: Boolean, default: false }) fennec!: boolean;

  dialog = false;

  t = $t;

  get labels() {
    return [$t(this, "connect_wallet"), $t(this, "install")];
  }

  get items() {
    return [
      {
        avaliable: this.fennec,
        value: "fennec",
        title: "Fennec",
        subtitle: $t(this, "fennec_wallet_subtitle"),
        logo: fennecLogo,
        handleInstall: () => {
          const url =
            getBrowser() === "firefox"
              ? "https://addons.mozilla.org/firefox/addon/fox_fennec"
              : "https://chrome.google.com/webstore/detail/fennec/eincngenkhohbbfpkohipekcmnkfamjp";

          window.open(url);
        }
      },
      {
        avaliable: true,
        value: "mixin",
        title: "Mixin Messenger",
        subtitle: $t(this, "mixin_wallet_subtitle"),
        logo: mmLogo
      }
    ];
  }

  onClick() {
    if (isMixin()) {
      this.$emit("auth", "mixin");
    } else {
      this.dialog = true;
    }
  }

  handleAuth(item) {
    if (item.avaliable) {
      this.$emit("auth", item.value);
    } else {
      item.handleInstall();
    }

    this.dialog = false;
  }
}
export default FAuthMethodModal;
</script>
