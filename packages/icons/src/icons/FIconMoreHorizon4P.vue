<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    aria-hidden="true"
    fill="none"
  >
    <circle
      cx="4.5"
      cy="8"
      r="0.5"
      transform="rotate(-90 4.5 8)"
      stroke="currentColor"
    ></circle>
    <circle
      cx="8"
      cy="8"
      r="0.5"
      transform="rotate(-90 8 8)"
      stroke="currentColor"
    ></circle>
    <circle
      cx="11.5"
      cy="8"
      r="0.5"
      transform="rotate(-90 11.5 8)"
      stroke="currentColor"
    ></circle>
  </svg>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({ name: "FIconMoreHorizon4P" })
export default class FIconMoreHorizon4P extends Vue {}
</script>
