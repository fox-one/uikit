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
      d="M6 6H18L14.4 11.85V19L9.6 17.7V11.85L6 6Z"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linejoin="round"
    ></path>
  </svg>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({ name: "FIconFilter" })
export default class FIconFilter extends Vue {}
</script>
