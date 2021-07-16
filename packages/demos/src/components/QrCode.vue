<template>
  <div>
    <v-row>
      <v-col>
        <f-qr-code :text="text" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field v-model="text"></v-text-field>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class QrCode extends Vue {
  text = "test";
}
export default QrCode;
</script>
