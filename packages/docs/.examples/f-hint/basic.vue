<template>
  <div>
    <span>
      APY
      <f-hint :hint="hint" />
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class Hint extends Vue {
  hint =
    "The annual percentage yield (APY) is the real rate of return earned on an investment";
}
export default Hint;
</script>
