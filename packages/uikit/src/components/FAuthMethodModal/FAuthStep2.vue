<template>
  <div class="f-auth-step2">
    <component :is="component" />

    <span class="f-auth-step2__back" @click="handleBack">
      <v-icon color="white">$back</v-icon>
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, PropSync } from "vue-property-decorator";
import FAuthFennecInstall from "./FAuthFennecInstall.vue";

@Component({
  name: "FAuthStep2",
  inheritAttrs: false,
  components: {
    FAuthFennecInstall
  }
})
class FAuthStep2 extends Vue {
  @PropSync("step") bindStep;

  @Prop() select;

  get component() {
    return this.select === "fennec" ? "FAuthFennecInstall" : "";
  }

  handleBack() {
    this.bindStep = 1;
  }
}
export default FAuthStep2;
</script>
