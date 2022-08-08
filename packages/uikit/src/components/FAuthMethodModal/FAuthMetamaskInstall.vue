<template>
  <div
    class="f-auth-metamask f-auth-step2"
    :class="{ 'f-auth-step2--small': smAndDown }"
  >
    <div class="f-auth-step2__left"></div>

    <div class="f-auth-step2__right">
      <div class="f-auth-step2__title">
        {{ labels[0] }}
      </div>
      <div class="f-auth-step2__subtitle">
        {{ labels[1] }}
      </div>
      <f-button
        color="greyscale_1"
        class="f-auth-step2__icon"
        @click="handleInstall"
      >
        <v-icon size="16" color="greyscale_7" class="mr-1"> $install </v-icon>
        <span class="f-auth-step2__install_label greyscale_7--text">
          {{ labels[2] }}
        </span>
      </f-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { FIconImport4PBold } from "@foxone/icons";
import { $t } from "../../utils/helper";
import { VIcon, VImg } from "vuetify/lib";

@Component({
  name: "FAuthMetamaskInstall",
  inheritAttrs: false,
  components: {
    VIcon,
    VImg,
    FIconImport4PBold
  }
})
class FAuthMetamaskInstall extends Vue {
  get labels() {
    return [
      $t(this, "metamask_not_installed"),
      $t(this, "metamask_introduction"),
      $t(this, "install")
    ];
  }

  get smAndDown() {
    return this.$vuetify.breakpoint.smAndDown;
  }

  handleInstall() {
    const url = "https://metamask.io/download/";

    window.open(url);
  }
}
export default FAuthMetamaskInstall;
</script>
