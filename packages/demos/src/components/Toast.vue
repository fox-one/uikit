<template>
  <v-row>
    <v-col>
      <f-button
        block
        type="secondary"
        class="mb-4 mt-10"
        @click="handleToast()"
      >
        Normal Toast
      </f-button>
      <f-button
        block
        dark
        type="primary"
        color="chives"
        class="mb-4"
        @click="handleToast('success')"
      >
        Success Toast
      </f-button>
      <f-button
        block
        type="warning"
        color="error"
        class="mb-4"
        @click="handleToast('error')"
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
