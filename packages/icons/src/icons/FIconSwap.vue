<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    aria-hidden="true"
    fill="none"
  >
    <path
      d="M20.9327 7.5C21.6154 8.85259 22 10.3814 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C14.7255 2 17.1962 3.09032 19 4.85857V2"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M8 14.5L10.3455 11.0333L13.6545 12.9667L16 9.5"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({ name: "FIconSwap" })
export default class FIconSwap extends Vue {}
</script>
