<template>
  <div>
    <f-slider v-model="value" />

    <div class="mt-5">Value: {{ value }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class Slider extends Vue {
  value = "0";
}
export default Slider;
</script>
