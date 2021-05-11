<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    aria-hidden="true"
    fill="none"
  >
    <path
      d="M26 9L12.5 22.5L7 15.5"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({ name: "FIconCheck" })
export default class FIconCheck extends Vue {}
</script>
