<template>
  <v-row>
    <v-col>
      <v-btn
        depressed
        rounded
        block
        color=""
        @click="handleToast()"
        class="mb-4 mt-10"
      >
        Normal Toast
      </v-btn>
      <v-btn
        depressed
        rounded
        block
        color="chives"
        @click="handleToast('success')"
        class="mb-4"
      >
        Success Toast
      </v-btn>
      <v-btn
        depressed
        rounded
        block
        color="error"
        @click="handleToast('error')"
        class="mb-4"
      >
        Error Toast
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
  handleToast(color) {
    toast(this, { message: "this is a toast", color: color });
  }
}
export default Toast;
</script>
