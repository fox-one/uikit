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
      x="2"
      y="2"
      width="20"
      height="20"
      rx="10"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></rect>
    <path
      d="M8 15L8 12"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M12 15V11"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M16 15L16 9"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({ name: "FIconPools" })
export default class FIconPools extends Vue {}
</script>
