<template>
  <div>
    <v-row>
      <v-col>
        <f-action-bar :actions="btns.slice(0, 3)"></f-action-bar>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <f-action-bar :actions="btns"></f-action-bar>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <f-action-bar :actions="btns.slice(0, 4)"></f-action-bar>
      </v-col>
    </v-row>
  </div>
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
      size: "26",
    },
    {
      text: "SELL",
      icon: mdiArrowDown,
      size: "26",
    },
    {
      text: "SELL",
      icon: mdiArrowDown,
      size: "26",
    },
  ];
}
export default Appbar;
</script>
