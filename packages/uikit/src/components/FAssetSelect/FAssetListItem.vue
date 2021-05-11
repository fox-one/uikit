<template>
  <v-lazy min-height="60">
    <v-list-item :value="meta.id" @click="$emit('select', asset)">
      <v-list-item-avatar>
        <f-mixin-asset-logo
          :logo="meta.logo"
          :chain-logo="meta.chainLogo"
          :size="32"
        />
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="font-weight-bold">
          {{ meta.title }}
        </v-list-item-title>
        <v-list-item-subtitle class="caption">
          {{ meta.subtitle }}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-lazy>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import {
  VListItem,
  VListItemContent,
  VListItemTitle,
  VListItemSubtitle,
  VListItemAvatar,
  VLazy
} from "vuetify/lib";
import FMixinAssetLogo from "../FMixinAssetLogo";

import type { Asset } from "./types";

@Component({
  name: "FAssetListItem",
  components: {
    VLazy,
    VListItem,
    VListItemContent,
    VListItemTitle,
    VListItemSubtitle,
    VListItemAvatar,
    FMixinAssetLogo
  }
})
class FAssetListItem extends Vue {
  @Prop() asset!: Asset;

  get meta() {
    const { chainLogo, displaySymbol, id, logo, name, symbol } = this.asset;

    return {
      id,
      logo,
      chainLogo,
      title: displaySymbol || symbol,
      subtitle: name
    };
  }
}
export default FAssetListItem;
</script>
