<template>
  <div>
    <f-switch v-model="value" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class Switch extends Vue {
  value = false;
}
export default Switch;
</script>
