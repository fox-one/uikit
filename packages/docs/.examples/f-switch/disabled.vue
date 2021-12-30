<template>
  <div>
    <div class="mb-4">
      <f-switch :input-value="true" disabled />
    </div>
    <div>
      <f-switch :input-value="false" disabled />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class Switch extends Vue {}
export default Switch;
</script>
