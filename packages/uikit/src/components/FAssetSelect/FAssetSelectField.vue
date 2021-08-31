<template>
  <v-layout align-center :class="classes">
    <f-mixin-asset-logo
      :logo="meta.logo"
      :chain-logo="meta.chainLogo"
      :size="32"
      class="f-asset-select-field__logo"
    />
    <v-flex class="f-asset-select-field__labels">
      <div class="f-asset-select-field__symbol">
        {{ meta.symbol }}
      </div>
      <div v-if="showName" class="f-asset-select-field__name">
        {{ meta.name }}
      </div>
    </v-flex>
    <v-btn v-if="selectable" icon small>
      <v-icon> $expand </v-icon>
    </v-btn>
  </v-layout>
</template>

<script lang="ts">
import FMixinAssetLogo from "../FMixinAssetLogo";
import { VFlex, VBtn, VIcon, VLayout } from "vuetify/lib";
import Themeable from "vuetify/src/mixins/themeable";
import mixins from "vuetify/src/util/mixins";

import type { Asset } from "./types";
import type { PropType } from "vue";

export default mixins(Themeable).extend({
  name: "FAssetSelectField",

  components: {
    VFlex,
    VBtn,
    VIcon,
    VLayout,
    FMixinAssetLogo
  },

  props: {
    asset: { type: Object as PropType<Asset | null>, default: null },
    rounded: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    selectable: { type: Boolean, default: true },
    inline: { type: Boolean, default: false },
    showName: { type: Boolean, default: true }
  },

  computed: {
    classes(): object {
      return {
        ...this.themeClasses,
        "f-asset-select-field": true,
        "f-asset-select-field--rounded": this.rounded,
        "f-asset-select-field--disabled": this.disabled,
        "f-asset-select-field--no-select": !this.selectable,
        "f-asset-select-field--inline": this.inline
      };
    },
    meta(): object {
      const { chainLogo, logo, name, symbol } = this.asset || {
        logo: "",
        chainLogo: "",
        symbol: "",
        name: ""
      };

      return { logo, chainLogo, symbol, name };
    }
  }
});
</script>

<style lang="scss">
@import "./FAssetSelectField.scss";
</style>