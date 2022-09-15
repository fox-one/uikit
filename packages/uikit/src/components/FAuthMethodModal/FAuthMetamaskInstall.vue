<template>
  <div
    class="f-auth-metamask f-auth-step2"
    :class="{
      'f-auth-step2--small': smAndDown,
      'f-auth-metamask--mobile': !isDesktop
    }"
  >
    <div class="f-auth-step2__left"></div>

    <div class="f-auth-step2__right">
      <div class="f-auth-step2__title" v-html="labels[0]" />
      <div class="f-auth-step2__subtitle" v-html="labels[1]" />
      <f-button
        v-if="isDesktop"
        color="greyscale_1"
        class="greyscale_7--text"
        @click="handleInstall"
      >
        {{ labels[2] }}
      </f-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { FIconImport4PBold } from "@foxone/icons";
import { $t } from "../../utils/helper";
import { VIcon, VImg } from "vuetify/lib";
import { isDesktop } from "@foxone/utils/helper";

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
      this.isDesktop
        ? $t(this, "metamask_not_installed")
        : $t(this, "metamask_not_installed_2"),
      this.isDesktop
        ? $t(this, "metamask_introduction")
        : $t(this, "metamask_introduction_2"),
      $t(this, "install"),
      $t(this, "open_in_mixin")
    ];
  }

  get isDesktop() {
    return isDesktop();
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
