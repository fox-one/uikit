<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    aria-hidden="true"
    fill="none"
  >
    <circle
      cx="9"
      cy="16"
      r="1.25"
      transform="rotate(-90 9 16)"
      stroke="currentColor"
      stroke-width="1.5"
    ></circle>
    <circle
      cx="16"
      cy="16"
      r="1.25"
      transform="rotate(-90 16 16)"
      stroke="currentColor"
      stroke-width="1.5"
    ></circle>
    <circle
      cx="23"
      cy="16"
      r="1.25"
      transform="rotate(-90 23 16)"
      stroke="currentColor"
      stroke-width="1.5"
    ></circle>
  </svg>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({ name: "FIconMore" })
export default class FIconMore extends Vue {}
</script>
