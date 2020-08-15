<template>
  <f-app-bar :appbar="appbar"></f-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class Appbar extends Vue {
  appbar = {
    show: true,
    back: true,
  };
}
export default Appbar;
</script>
