<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    aria-hidden="true"
    fill="none"
  >
    <circle
      cx="12"
      cy="6.75"
      r="0.75"
      stroke="currentColor"
      stroke-width="1.5"
    ></circle>
    <circle
      cx="12"
      cy="12"
      r="0.75"
      stroke="currentColor"
      stroke-width="1.5"
    ></circle>
    <circle
      cx="12"
      cy="17.25"
      r="0.75"
      stroke="currentColor"
      stroke-width="1.5"
    ></circle>
  </svg>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({ name: "FIconMoreVerticalBold" })
export default class FIconMoreVerticalBold extends Vue {}
</script>
