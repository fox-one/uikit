<template>
  <v-row>
    <v-col cols="6">
      <f-mixin-asset-logo :logo="logo" :chain-logo="chainLogo" />
    </v-col>
    <v-col cols="6">
      <f-mixin-asset-logo :logo="logo" :chain-logo="chainLogo" :size="48" />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class MixinAssetLogo extends Vue {
  logo =
    "https://mixin-images.zeromesh.net/UasWtBZO0TZyLTLCFQjvE_UYekjC7eHCuT_9_52ZpzmCC-X-NPioVegng7Hfx0XmIUavZgz5UL-HIgPCBECc-Ws=s128";

  chainLogo =
    "https://mixin-images.zeromesh.net/zVDjOxNTQvVsA8h2B4ZVxuHoCF3DJszufYKWpd9duXUSbSapoZadC7_13cnWBqg0EmwmRcKGbJaUpA8wFfpgZA=s128";
}
export default MixinAssetLogo;
</script>
