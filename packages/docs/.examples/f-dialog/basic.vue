<template>
  <div>
    <f-button color="primary" @click="dialog"> Dialog </f-button>

    <f-button color="primary" @click="dialog2"> Dialog2 </f-button>

    <f-button color="primary" @click="dialog3"> Dialog3 </f-button>

    <f-button color="warning" @click="warning"> Warning </f-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class Dialog extends Vue {
  dialog() {
    this.$uikit.dialog.show({
      title: "Warning",
      text: "Once the transaction is executed, it is irrevocable, please pay after confirmation carefully"
    });
  }

   dialog2() {
    this.$uikit.dialog.show({
      title: "Warning",
      text: "Once the transaction is executed, it is irrevocable, please pay after confirmation carefully",
      cancel: {
        show: false
      }
    });
  }

  dialog3() {
    this.$uikit.dialog.show({
      title: "Warning",
      text: "Once the transaction is executed, it is irrevocable, please pay after confirmation carefully",
      cancel: {
        show: false
      },
      confirm: {
        props: { text: false, color: "primary" },
        callback: () => {
          console.log("got it");
        }
      }
    });
  }

  warning() {
    this.$uikit.dialog.show({
      title: "Warning",
      text: "Once the transaction is executed, it is irrevocable, please pay after confirmation carefully",
      type: "warning"
    });
  }
}
export default Dialog;
</script>
