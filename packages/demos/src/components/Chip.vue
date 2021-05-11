<template>
  <f-panel>
    <v-chip
      v-for="item in sample"
      :key="`normal-${item}`"
      label
      :color="item"
      class="mb-1 mr-1"
    >
      {{ item }}
    </v-chip>
    <v-divider class="my-2" />
    <v-chip
      v-for="item in sample"
      :key="`normal-${item}`"
      label
      small
      :color="item"
      class="mb-1 mr-1"
    >
      {{ item }}
    </v-chip>
  </f-panel>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class FChip extends Vue {
  sample = [
    "primary",
    "error",
    "success",
    "yellow",
    "purple",
    "blue",
    "gray",
    "green",
    "red"
  ];
}
export default FChip;
</script>
