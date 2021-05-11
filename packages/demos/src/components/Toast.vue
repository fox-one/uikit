<template>
  <v-container>
    <v-row>
      <v-col>
        <f-button block color="primary" class="mb-4 mt-10" @click="func1">
          Base
        </f-button>

        <f-button block color="primary" class="mb-4 mt-10" @click="func2">
          Base
        </f-button>

        <f-button block color="success" class="mb-4 mt-10" @click="success">
          Success
        </f-button>

        <f-button block color="warning" class="mb-4 mt-10" @click="warning">
          Warning
        </f-button>

        <f-button block color="error" class="mb-4 mt-10" @click="error">
          error
        </f-button>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class Toast extends Vue {
  func1() {
    this.$uikit.toast.show({ message: "Hello World", color: "primary" });
  }

  func2() {
    this.$uikit.toast.show({ message: "Hello World", autoWidth: false });
  }

  success() {
    this.$uikit.toast.success({
      message: "Hello World",
      action: { text: "Borrow", callback: () => console.log("borrow") }
    });
  }

  warning() {
    this.$uikit.toast.warning({
      message: "Hello World",
      action: { text: "Borrow", callback: () => console.log("borrow") }
    });
  }

  error() {
    this.$uikit.toast.error({
      message: "Hello World",
      action: { text: "Borrow", callback: () => console.log("borrow") }
    });
  }
}
export default Toast;
</script>
