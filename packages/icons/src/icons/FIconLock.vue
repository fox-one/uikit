<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    aria-hidden="true"
    fill="none"
  >
    <rect
      x="5.25"
      y="11.25"
      width="13.5"
      height="7.5"
      rx="1.5"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></rect>
    <path
      d="M16.5 11.25V9C16.5 6.51472 14.4853 4.5 12 4.5V4.5C9.51472 4.5 7.5 6.51472 7.5 9V11.25"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({ name: "FIconLock" })
export default class FIconLock extends Vue {}
</script>
