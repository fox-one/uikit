<template>
  <v-row>
    <v-col>
      <v-btn outlined rounded block color="primary" @click="handleToast">
        Toast
      </v-btn>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

export function toast(vue: Vue, data: { message: string; color?: string }) {
  vue.$store.commit("app/SET_TOAST", { show: true, ...data });
}

@Component
class Toast extends Vue {
  handleToast() {
    toast(this, { message: "this is a toast", color: "info" });
  }
}
export default Toast;
</script>
