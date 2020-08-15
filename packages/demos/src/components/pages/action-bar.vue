<template>
  <f-action-bar :buttons="btns"></f-action-bar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mdiArrowDown } from "@mdi/js";

@Component
class Appbar extends Vue {
  btns = [
    {
      text: "SEND",
      icon: mdiArrowDown,
      size: "26",
      color: "#F50000",
    },
    {
      text: "RECEIVE",
      icon: mdiArrowDown,
      size: "26",
      color: "#009621",
    },
    {
      text: "Exchange",
      icon: mdiArrowDown,
      size: "16",
    },
  ];
}
export default Appbar;
</script>
