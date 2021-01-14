<template>
  <v-row>
    <v-col>
      <v-btn outlined rounded block color="primary" @click="handlePaying">
        Pay
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

  text = "Check result";

  handlePaying() {
    this.show = true;
  }

  handleCancel() {
    this.show = false;
  }
}
export default PayingModal;
</script>
