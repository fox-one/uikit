<template>
  <f-number-input v-model="value" placeholder="Input Amount" />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class NumberInput extends Vue {
  value = "";
}
export default NumberInput;
</script>
