<template>
  <v-row>
    <v-col>
      <v-btn outlined rounded block color="primary" @click="handlePaying">
        支付
      </v-btn>
    </v-col>
    <f-paying-modal :show="show" :text="text" @cancel="handleCancel" />
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class PayingModal extends Vue {
  show = true;

  text = "正在检查支付结果";

  handlePaying() {
    this.show = true;
  }

  handleCancel() {
    this.show = false;
  }
}
export default PayingModal;
</script>
