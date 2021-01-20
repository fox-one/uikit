<template>
  <v-row>
    <v-col>
      <f-button
        block
        type="secondary"
        @click="handleToast()"
        class="mb-4 mt-10"
      >
        Normal Toast
      </f-button>
      <f-button
        block
        dark
        type="primary"
        color="chives"
        @click="handleToast('success')"
        class="mb-4"
      >
        Success Toast
      </f-button>
      <f-button
        block
        type="warning"
        color="error"
        @click="handleToast('error')"
        class="mb-4"
      >
        Error Toast
      </f-button>
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
