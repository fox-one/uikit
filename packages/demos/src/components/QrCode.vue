<template>
  <v-row>
    <f-qr-code :text="text" />
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class QrCode extends Vue {
  text = "ABC-ABC";
}
export default QrCode;
</script>
