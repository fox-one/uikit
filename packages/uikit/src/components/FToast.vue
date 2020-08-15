<template>
  <v-snackbar
    v-model="bindValue"
    :color="toast.color"
    :timeout="3000"
    top
    style="top: 60px;"
  >
    {{ toast.message }}
  </v-snackbar>
</template>

<script lang="ts">
import { Component, Vue, PropSync } from "vue-property-decorator";

@Component
class FToast extends Vue {
  @PropSync("value", { type: Boolean, default: false }) bindValue;
}
export default FToast;
</script>
