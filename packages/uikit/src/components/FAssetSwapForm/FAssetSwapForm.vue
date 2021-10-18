<template>
  <div class="f-asset-swap-form__wapper">
    <v-form
      ref="form"
      :class="classes"
      autocomplete="off"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <slot ref="input" name="input" :messages="inputMessages" />

      <div class="f-asset-swap-form__divider">
        <v-btn
          v-show="!hideSwitch"
          icon
          small
          class="greyscale_5 f-asset-swap-form__swap"
          @click="handleSwitch"
        >
          <v-icon>$swap</v-icon>
        </v-btn>
      </div>

      <slot ref="output" name="output" :messages="outputMessages" />
    </v-form>
  </div>
</template>

<script lang="ts">
import { VForm, VIcon, VBtn } from "vuetify/src/components";
import Themeable from "vuetify/src/mixins/themeable";
import mixins from "vuetify/src/util/mixins";

export default mixins(Themeable).extend({
  name: "FAssetSwapForm",

  props: {
    hideSwitch: {
      type: Boolean,
      default: false
    }
  },

  components: {
    VForm,
    VIcon,
    VBtn
  },

  data() {
    return {
      inputMessages: [],
      outputMessages: []
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
    this.getForm()?.inputs.forEach((input, index) => {
      this.$watch(
        () => input.messagesToDisplay,
        () => {
          this.updateErrorMessages(index);
        }
      );
    });
  },

  methods: {
    getForm(): any {
      return this.$refs.form;
    },

    updateErrorMessages(index) {
      if (index === 0) {
        this.inputMessages = this.getForm()?.inputs?.[0].messagesToDisplay;
      } else {
        this.outputMessages = this.getForm()?.inputs?.[1].messagesToDisplay;
      }
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
