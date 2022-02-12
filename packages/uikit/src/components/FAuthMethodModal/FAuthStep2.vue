<template>
  <div class="f-auth-step2">
    <component
      :is="component"
      :client-id="clientId"
      :scope="scope"
      :code-challenge="codeChallenge"
      :state="state"
      :is-firesbox="isFiresbox"
      v-on="$listeners"
    />

    <span class="f-auth-step2__back" @click="handleBack">
      <v-icon :color="select === 'fennec' ? 'white' : 'greyscale_1'"
        >$back</v-icon
      >
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, PropSync } from "vue-property-decorator";
import FAuthFennecInstall from "./FAuthFennecInstall.vue";
import FAuthMixinMessenger from "./FAuthMixinMessenger.vue";
import { VIcon } from "vuetify/lib";

@Component({
  name: "FAuthStep2",
  inheritAttrs: false,
  components: {
    FAuthFennecInstall,
    FAuthMixinMessenger,
    VIcon
  }
})
class FAuthStep2 extends Vue {
  @PropSync("step") bindStep;
  @Prop() select;
  @Prop({ type: String }) clientId!: string;
  @Prop({ type: String }) scope!: string;
  @Prop({ type: String }) codeChallenge!: string;
  @Prop({ type: String, default: "" }) state!: string;
  @Prop({ type: Boolean, default: false }) isFiresbox!: boolean;

  get component() {
    return this.select === "fennec"
      ? "FAuthFennecInstall"
      : "FAuthMixinMessenger";
  }

  handleBack() {
    this.bindStep = 1;
  }
}
export default FAuthStep2;
</script>
