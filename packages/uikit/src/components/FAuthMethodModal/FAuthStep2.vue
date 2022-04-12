<template>
  <div class="f-auth-step2">
    <component :is="component" v-bind="$attrs" v-on="$listeners" />

    <span class="f-auth-step2__back" @click="handleBack">
      <v-icon :color="select === 'fennec' ? 'white' : 'black'">$back</v-icon>
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, PropSync } from "vue-property-decorator";
import FAuthFennecInstall from "./FAuthFennecInstall.vue";
import FAuthMixinMessenger from "./FAuthMixinMessenger.vue";
import FAuthLinks from "./FAuthLinks.vue";
import { VIcon } from "vuetify/lib";

@Component({
  name: "FAuthStep2",
  inheritAttrs: false,
  components: {
    FAuthFennecInstall,
    FAuthMixinMessenger,
    FAuthLinks,
    VIcon
  }
})
class FAuthStep2 extends Vue {
  @PropSync("step") bindStep;

  @Prop() select;

  get component() {
    switch (this.select) {
      case "fennec":
        return "FAuthFennecInstall";
      case "links":
        return "FAuthLinks";
      default:
        return "FAuthMixinMessenger";
    }
  }

  handleBack() {
    this.bindStep = 1;
  }
}
export default FAuthStep2;
</script>
