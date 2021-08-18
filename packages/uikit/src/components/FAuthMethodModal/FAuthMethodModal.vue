<template>
  <f-bottom-sheet v-model="dialog" wapper-in-desktop="dialog" :title="title">
    <template #activator>
      <slot name="activator" :on="{ click: onClick }"></slot>
    </template>

    <f-list-item
      v-for="(item, index) in items"
      :key="index"
      :title="item.title"
      :subtitle="item.subtitle"
      @click="handleAuth(item.value)"
    >
      <template #head>
        <v-avatar size="32">
          <v-img :src="item.logo" />
        </v-avatar>
      </template>
    </f-list-item>
  </f-bottom-sheet>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import FBottomSheet from "../FBottomSheet";
import FListItem from "../FList/FListItem.vue";
import { VAvatar, VImg } from "vuetify/lib";
import { $t } from "../../utils/helper";

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
  @Prop({ type: String, default: "" }) title!: string;

  @Prop({ type: Boolean, default: false }) fennec!: boolean;

  dialog = false;

  get items() {
    const items = [
      {
        disabled: !this.fennec,
        value: "fennec",
        title: "Fennec",
        subtitle: $t(this, "fennec_wallet_subtitle"),
        logo: fennecLogo
      },
      {
        value: "mixin",
        title: "Mixin Messenger",
        subtitle: $t(this, "mixin_wallet_subtitle"),
        logo: mmLogo
      }
    ];

    return items.filter((x) => !x.disabled);
  }

  onClick() {
    if (this.fennec) {
      this.dialog = true;
    } else {
      this.handleAuth("mixin");
    }
  }

  handleAuth(value) {
    this.$emit("auth", value);
    this.dialog = false;
  }
}
export default FAuthMethodModal;
</script>
