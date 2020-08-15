<template>
  <div>
    <v-alert
      v-if="error"
      :value="true"
      color="error"
      icon="error"
      class="ma-5"
    />
    <canvas v-else ref="canvas" class="canvas" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import QRCode from "qrcode";

@Component
class FQrCode extends Vue {
  @Prop({ type: String, default: "" }) readonly value!: string;

  error = false;

  dataUrl = null;

  get size() {
    return document.body.clientWidth < 625 ? 128 : 256;
  }

  @Watch("value")
  draw() {
    const canvas = this.$refs.canvas;
    QRCode.toCanvas(
      canvas,
      this.value,
      {
        width: this.size,
        margin: 0,
      },
      (err) => {
        if (err) {
          this.error = true;
        }
      }
    );
  }

  mounted() {
    this.draw();
  }
}
export default FQrCode;
</script>

<style lang="scss" scoped>
.canvas {
  border-radius: 5px;
}
</style>
