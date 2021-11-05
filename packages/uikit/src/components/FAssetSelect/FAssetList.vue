<template>
  <v-list class="f-asset-list">
    <v-list-item-group :value="current" active-class="primary--text">
      <f-asset-item
        v-for="asset in assets"
        :key="'asset-' + asset.id"
        :asset="asset"
        @select="handleSelect"
      />
    </v-list-item-group>
  </v-list>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { VList, VListItemGroup } from "vuetify/lib";
import FAssetItem from "./FAssetListItem.vue";

import type { Asset } from "./types";

@Component({
  name: "FAssetList",
  components: {
    VList,
    VListItemGroup,
    FAssetItem
  }
})
class FAssetList extends Vue {
  @Prop() asset!: Asset | null;

  @Prop() assets!: Asset[];

  get current() {
    return this.asset?.id;
  }

  handleSelect(asset: Asset) {
    this.$emit("select", asset);
  }
}
export default FAssetList;
</script>

<style lang="scss">
.f-asset-list {
  height: 60vh;
  overflow-y: auto;
}
</style>
