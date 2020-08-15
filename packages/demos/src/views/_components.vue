<template>
  <component :is="component"></component>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class Page extends Vue {
  get component() {
    return this.$route.params.component;
  }
}
export default Page;
</script>
