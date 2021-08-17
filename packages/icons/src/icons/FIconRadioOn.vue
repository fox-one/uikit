<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    aria-hidden="true"
    fill="none"
  >
    <rect
      x="7"
      y="7"
      width="18"
      height="18"
      rx="9"
      stroke="black"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></rect>
    <path
      d="M11 16C11 13.2386 13.2386 11 16 11C18.7614 11 21 13.2386 21 16C21 18.7614 18.7614 21 16 21C13.2386 21 11 18.7614 11 16Z"
      fill="currentColor"
    ></path>
  </svg>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({ name: "FIconRadioOn" })
export default class FIconRadioOn extends Vue {}
</script>
