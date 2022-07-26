<template>
  <f-bottom-sheet
    v-model="dialog"
    wapper-in-desktop="dialog"
    :dialog-props="{ maxWidth: step === 1 ? 526 : 627 }"
  >
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
        :metamask="metamask"
        :wallets="wallets"
        v-bind="$attrs"
        @auth="(e) => $emit('auth', e)"
        @error="(e) => $emit('error', e)"
        @close="close"
      />

      <f-auth-step-2
        v-if="step === 2"
        :step.sync="step"
        :select="select"
        :client-id="clientId"
        :scope="scope"
        :is-firesbox="isFiresbox"
        :pkce="pkce"
        :hosts="hosts"
        v-bind="$attrs"
        @auth="(e) => $emit('auth', e)"
        @error="(e) => $emit('error', e)"
        @close="close"
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
import authorize from "../../utils/authorize";

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
  // support fennec or not
  @Prop({ type: Boolean, default: false }) fennec!: boolean;

  // support metamask or not
  @Prop({ type: Boolean, default: false }) metamask!: boolean;

  @Prop({ default: () => ["fennec", "mixin"] }) wallets!: string[];

  @Prop() clientId!: string;

  @Prop() scope!: string;

  @Prop({ default: false, type: Boolean }) isFiresbox!: boolean;

  @Prop({ default: () => [] }) hosts!: string[];

  @Prop({ type: Boolean, default: false }) pkce!: boolean;

  client: any = null;

  dialog = false;

  step = 1;

  select = "";

  authorize = authorize;

  get meta() {
    return { isDesktop: this.$vuetify.breakpoint.mdAndUp };
  }

  destroyed() {
    this.client?.disconnect();
  }

  @Watch("dialog")
  handleDialogChange(value) {
    if (!value) {
      this.step = 1;
      this.select = "";
      this.$emit("close");
    }
  }

  close() {
    this.dialog = false;
  }

  show() {
    this.onClick();
  }

  onClick() {
    if (isMixin()) {
      this.client = authorize(
        { clientId: this.clientId, scope: this.scope, pkce: this.pkce },
        this.isFiresbox,
        this.hosts,
        {
          onError: (error) => this.$emit("error", error),
          onSuccess: (data) => {
            if (this.pkce) {
              this.$emit("auth", { type: "mixin", token: data });
            } else {
              this.$emit("auth", { type: "mixin", code: data });
            }
          }
        }
      );
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
