<template>
  <div class="f-asset-swap-form__wapper">
    <v-form
      ref="form"
      :class="classes"
      autocomplete="off"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <slot ref="input" name="input" />

      <div class="f-asset-swap-form__divider">
        <v-btn
          icon
          small
          class="greyscale_5 f-asset-swap-form__swap"
          @click="handleSwitch"
        >
          <v-icon>$swap</v-icon>
        </v-btn>
      </div>

      <slot ref="output" name="output" />
    </v-form>

    <slot name="error-messages" :messages="messagesToDisplay">
      <v-messages color="error" :value="messagesToDisplay" />
    </slot>
  </div>
</template>

<script lang="ts">
import { VForm, VIcon, VBtn, VMessages } from "vuetify/src/components";
import Themeable from "vuetify/src/mixins/themeable";
import mixins from "vuetify/src/util/mixins";

export default mixins(Themeable).extend({
  name: "FAssetSwapForm",

  components: {
    VForm,
    VIcon,
    VBtn,
    VMessages
  },

  data() {
    return {
      messagesToDisplay: []
    };
  },

  computed: {
    classes(): object {
      return {
        ...this.themeClasses,
        "f-asset-swap-form": true
      };
    }
  },

  mounted() {
    this.getForm()?.inputs.forEach((input) => {
      this.$watch(
        () => input.messagesToDisplay,
        () => {
          this.updateErrorMessages();
        }
      );
    });
  },

  methods: {
    getForm(): any {
      return this.$refs.form;
    },
    updateErrorMessages() {
      const messages = this.getForm()?.inputs.reduce((messages, input) => {
        return [...(input.messagesToDisplay || []), ...messages];
      }, []);

      this.messagesToDisplay = messages;
    },
    handleSwitch() {
      this.$emit("switch");
    }
  }
});
</script>

<style lang="scss">
@import "./FAssetSwapForm.scss";
</style>
