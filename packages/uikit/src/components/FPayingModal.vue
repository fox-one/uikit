<template>
  <v-overlay :value="visible" opacity="0.8">
    <div class="payment-page">
      <div class="spinner">
        <span class="rect1" />
        <span class="rect1" />
        <span class="rect1" />
      </div>
      <div class="hint">
        {{ $t("common.checking-payment") }}
      </div>
      <div class="actions">
        <div v-ripple class="action" @click="handleCancelPulling">
          {{ $t("common.cancel") }}
        </div>
      </div>
    </div>
  </v-overlay>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
class FPaymentLoadingModal extends Vue {
  @Prop() visible!: boolean;

  handleCancelPulling() {
    this.visible = false;
    this.$emit("cancel");
  }
}
export default FPaymentLoadingModal;
</script>

<style lang="scss" scoped>
.payment-page {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;

  .spinner {
    margin-bottom: 15px;

    span {
      display: inline-block;
      background-color: #fff;
      margin: 0 2px;
      width: 8px;
      height: 34px;
      opacity: 0.8;
      animation: spin 0.9s infinite;

      &:nth-child(2) {
        animation-delay: 0.15s;
      }

      &:nth-child(3) {
        animation-delay: 0.3s;
      }
    }
  }

  .hint {
    margin-bottom: 40px;
    font-size: 16px;
    opacity: 0.8;
    font-weight: bold;
  }

  .actions {
    display: flex;
    align-items: center;
    border: 1px solid rgba(255, 255, 255, 0.3);
    height: 44px;
    font-size: 16px;
    width: 100%;
    border-radius: 22px;
    font-weight: bold;
    overflow: hidden;

    .action {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      height: 100%;

      &.disabled {
        opacity: 0.5;
      }

      &:first-child {
        &::after {
          content: "";
          position: absolute;
          right: -1px;
          height: 30px;
          width: 2px;
          top: 50%;
          transform: translateY(-50%);
          background-color: rgba(255, 255, 255, 0.3);
        }
      }
    }
  }
}

@keyframes spin {
  0% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(0.4);
    opacity: 1;
  }
  100% {
    transform: scaleY(1);
  }
}
</style>
