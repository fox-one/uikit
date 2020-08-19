<template>
  <v-row>
    <v-btn outlined rounded block color="primary">
      支付
    </v-btn>
    <f-paying-modal :show="show" :text="text" />
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class PayingModal extends Vue {
  show = false;

  text = "正在检查支付结果";
}
export default PayingModal;
</script>
