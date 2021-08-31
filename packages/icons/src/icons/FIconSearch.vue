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
      cx="11.25"
      cy="11.25"
      r="6"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></circle>
    <path
      d="M15.6055 15.6054L18.6055 18.6054"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({ name: "FIconSearch" })
export default class FIconSearch extends Vue {}
</script>
