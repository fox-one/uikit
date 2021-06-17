<template>
  <f-app-bar v-bind="propData"></f-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class AppBar extends Vue {
  get propData() {
    return {
      title: "Fox.ONE UIKit"
    };
  }
}
export default AppBar;
</script>
