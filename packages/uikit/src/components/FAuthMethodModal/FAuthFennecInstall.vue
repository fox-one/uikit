<template>
  <div
    class="f-auth-fennec f-auth-step2"
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
import FIconImport4PBold from "@foxone/icons/FIconImport4PBold";
import { $t, getBrowser } from "../../utils/helper";
import { VIcon, VImg } from "vuetify/lib";

@Component({
  name: "FAuthFennecInstall",
  inheritAttrs: false,
  components: {
    VIcon,
    VImg,
    FIconImport4PBold
  }
})
class FAuthFennecInstall extends Vue {
  get labels() {
    return [
      $t(this, "fennec_not_installed"),
      $t(this, "fennec_introduction"),
      $t(this, "install")
    ];
  }

  get smAndDown() {
    return this.$vuetify.breakpoint.smAndDown;
  }

  handleInstall() {
    const url =
      getBrowser() === "firefox"
        ? "https://addons.mozilla.org/firefox/addon/fox_fennec"
        : "https://chrome.google.com/webstore/detail/fennec/eincngenkhohbbfpkohipekcmnkfamjp";

    window.open(url);
  }
}
export default FAuthFennecInstall;
</script>
