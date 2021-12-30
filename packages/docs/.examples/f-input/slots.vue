<template>
  <div>
    <f-input
      v-model="price"
      label="Setup price"
      class="mb-10"
      :hint="`Price is ${price} JPY`"
      persistent-hint
    >
      <template #prepend><div class="mr-2">Price</div></template>
      <template #append-outer><div class="ml-2">JPY</div></template>
    </f-input>

    <f-input v-model="value2" label="Heart pulse rate">
      <template #prepend-inner>
        <v-icon class="mr-2">$FIconCrowdFill</v-icon>
      </template>
      <template #append>
        <div class="ml-2 f-caption" style="white-space: nowrap">per min</div>
      </template>
    </f-input>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class FInputDemo extends Vue {
  price = "0.1";
}
export default FInputDemo;
</script>
