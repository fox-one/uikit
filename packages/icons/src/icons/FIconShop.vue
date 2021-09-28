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
      d="M6 7H14.75C17.3734 7 19.5 9.12665 19.5 11.75V11.75C19.5 14.3734 17.3734 16.5 14.75 16.5H8.35039C7.58275 16.5 6.93899 15.9204 6.85863 15.157L6 7Z"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <ellipse cx="8" cy="19" rx="1" ry="1" fill="currentColor"></ellipse>
    <ellipse cx="17" cy="19" rx="1" ry="1" fill="currentColor"></ellipse>
    <path
      d="M6.24062 9L5.95937 6.75174C5.83418 5.75097 4.98341 5 3.97484 5H2.5"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({ name: "FIconShop" })
export default class FIconShop extends Vue {}
</script>
