<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 3.5C8.96243 3.5 6.5 5.96243 6.5 9V10.063C5.63739 10.285 5 11.0681 5 12V17C5 18.1046 5.89543 19 7 19H17C18.1046 19 19 18.1046 19 17V12C19 11.0681 18.3626 10.285 17.5 10.063V9C17.5 5.96243 15.0376 3.5 12 3.5ZM15.5 10V9C15.5 7.067 13.933 5.5 12 5.5C10.067 5.5 8.5 7.067 8.5 9V10H15.5Z"
      fill="currentColor"
    ></path>
  </svg>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({ name: "FIconLockFill" })
export default class FIconLockFill extends Vue {}
</script>
