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
      cx="6.75"
      cy="12"
      r="0.75"
      transform="rotate(-90 6.75 12)"
      stroke="currentColor"
      stroke-width="1.5"
    ></circle>
    <circle
      cx="12"
      cy="12"
      r="0.75"
      transform="rotate(-90 12 12)"
      stroke="currentColor"
      stroke-width="1.5"
    ></circle>
    <circle
      cx="17.25"
      cy="12"
      r="0.75"
      transform="rotate(-90 17.25 12)"
      stroke="currentColor"
      stroke-width="1.5"
    ></circle>
  </svg>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({ name: "FIconMoreHorizonBold" })
export default class FIconMoreHorizonBold extends Vue {}
</script>
