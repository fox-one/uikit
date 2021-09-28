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
      d="M13 19H7.5C6.39543 19 5.5 18.1046 5.5 17V7C5.5 5.89543 6.39543 5 7.5 5H16.5C17.6046 5 18.5 5.89543 18.5 7V8.5"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M13.5 13C13.5 10.3386 18.5 10.0941 18.5 13C18.5 15.235 16 14.6146 16 16.2441M16 18.9113V18.8394"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
    ></path>
  </svg>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({ name: "FIconDocumentHelp" })
export default class FIconDocumentHelp extends Vue {}
</script>
