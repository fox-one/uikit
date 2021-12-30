<template>
  <div>
    <span>
      APY
      <f-hint :hint="hint" href="href" />
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class Hint extends Vue {
  hint =
    "The annual percentage yield (APY) is the real rate of return earned on an investment";

  href = "https://en.wikipedia.org/wiki/Annual_percentage_yield";
}
export default Hint;
</script>
