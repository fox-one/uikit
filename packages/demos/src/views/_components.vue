<template>
  <component :is="component"></component>
</template>

<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import page from "../mixins/page";

@Component
class Page extends Mixins(page) {
  get appbar() {
    return {
      title: `${this.component}`,
      back: true
    };
  }
  get component() {
    return this.$route.params.component;
  }
}
export default Page;
</script>
