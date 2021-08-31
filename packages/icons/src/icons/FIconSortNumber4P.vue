<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    aria-hidden="true"
    fill="none"
  >
    <path
      d="M7 5H13.5"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M7 11H13.5"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <circle cx="4" cy="5" r="1" fill="currentColor"></circle>
    <circle cx="4" cy="11" r="1" fill="currentColor"></circle>
  </svg>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({ name: "FIconSortNumber4P" })
export default class FIconSortNumber4P extends Vue {}
</script>
