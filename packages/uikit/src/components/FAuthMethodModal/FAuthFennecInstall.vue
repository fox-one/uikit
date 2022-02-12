<template>
  <div class="f-auth-fennec">
    <v-img :src="bg" height="100%" />

    <div class="f-auth-fennec__right">
      <div class="f-auth-fennec__title">
        {{ labels[0] }}
      </div>
      <div class="f-auth-fennec__subtitle">
        {{ labels[1] }}
      </div>
      <f-button
        color="greyscale_1"
        class="f-auth-fennec__icon"
        @click="handleInstall"
      >
        <v-icon size="16" color="greyscale_7" class="mr-1"> $install </v-icon>
        {{ labels[2] }}
      </f-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { FIconImport4PBold } from "@foxone/icons";
import { $t, getBrowser } from "../../utils/helper";
import { VIcon, VImg } from "vuetify/lib";

@Component({
  name: "FAuthFennecInstall",
  components: {
    VIcon,
    VImg,
    FIconImport4PBold
  }
})
class FAuthFennecInstall extends Vue {
  bg = "https://static.fox.one/image/bg_fennec_install.png";

  get labels() {
    return [
      $t(this, "fennec_not_installed"),
      $t(this, "fennec_introduction"),
      $t(this, "install")
    ];
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
