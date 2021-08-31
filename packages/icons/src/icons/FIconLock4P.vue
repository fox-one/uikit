<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    aria-hidden="true"
    fill="none"
  >
    <rect
      x="3.5"
      y="7.5"
      width="9"
      height="5"
      rx="1"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></rect>
    <path
      d="M11 7.5V6C11 4.34315 9.65685 3 8 3V3C6.34315 3 5 4.34315 5 6V7.5"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({ name: "FIconLock4P" })
export default class FIconLock4P extends Vue {}
</script>
