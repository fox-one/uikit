<template>
  <div>
    <f-fiat-division :parts="parts" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class FiatDivision extends Vue {
  get parts() {
    return new Intl.NumberFormat("en", {
      currency: "USD",
      style: "currency"
    }).formatToParts(121212);
  }
}
export default FiatDivision;
</script>
