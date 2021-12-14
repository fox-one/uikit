<template>
  <f-bottom-sheet v-model="dialog" wapper-in-desktop="dialog">
    <template #activator>
      <slot name="activator" :on="{ click: onClick }"></slot>
    </template>

    <div
      class="f-auth-methods--content"
      :class="{ 'f-auth-methods--mobile': !meta.isDesktop }"
    >
      <f-auth-step-1
        v-if="step === 1"
        :step.sync="step"
        :select.sync="select"
        :fennec="fennec"
        v-bind="$attrs"
        v-on="$listeners"
      />

      <f-auth-step-2
        v-if="step === 2"
        :step.sync="step"
        :select="select"
        v-bind="$attrs"
        v-on="$listeners"
      />
    </div>
  </f-bottom-sheet>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import FBottomSheet from "../FBottomSheet";
import FListItem from "../FList/FListItem";
import { VAvatar, VImg } from "vuetify/lib";
import { isMixin } from "@foxone/utils/mixin";

import FAuthStep1 from "./FAuthStep1.vue";
import FAuthStep2 from "./FAuthStep2.vue";

@Component({
  name: "FAuthMethodModal",
  inheritAttrs: false,
  components: {
    FAuthStep1,
    FAuthStep2,
    FBottomSheet,
    FListItem,
    VAvatar,
    VImg
  }
})
class FAuthMethodModal extends Vue {
  @Prop({ type: Boolean, default: false }) fennec!: boolean;

  dialog = false;

  step = 1;

  select = "";

  get meta() {
    return { isDesktop: this.$vuetify.breakpoint.mdAndUp };
  }

  @Watch("dialog")
  handleDialogChange(value) {
    if (!value) {
      this.step = 1;
      this.select = "";
    }
  }

  onClick() {
    if (isMixin()) {
      this.$emit("auth", "mixin");
    } else {
      this.dialog = true;
    }
  }
}
export default FAuthMethodModal;
</script>

<style lang="scss">
@import "./FAuthMethodModal.scss";
</style>
