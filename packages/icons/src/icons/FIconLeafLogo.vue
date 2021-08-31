<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="73"
    height="73"
    viewBox="0 0 73 73"
    aria-hidden="true"
    fill="none"
  >
    <svg
      width="73"
      height="73"
      viewBox="0 0 73 73"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M36.5 18.6938C29.7424 31.8617 16.0685 40.8955 0.274539 40.9991C0.0933146 39.5248 0 38.0233 0 36.5C0 17.8649 13.9652 2.49154 32.0009 0.27454C33.4752 0.0933191 34.9767 0 36.5 0C38.0233 0 39.5248 0.0933151 40.9991 0.27454C40.9991 0.274543 40.9991 0.274545 40.9991 0.274548C59.0348 2.49157 73 17.8649 73 36.5C73 38.0233 72.9066 39.5248 72.7254 40.9991C56.9315 40.8955 43.2576 31.8617 36.5 18.6938Z"
        fill="#9FF219"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M35.3484 52.2147C32.0272 58.218 30.1001 65.0999 30.0038 72.4236C12.9446 69.3591 0 54.4412 0 36.4999C0 34.9767 0.0933146 33.4752 0.274539 32.0009C15.2176 32.0988 28.2629 40.1908 35.3484 52.2147Z"
        fill="url(#leaf_logo_linear_1)"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M36.5 72.9999C56.6584 72.9999 73 56.6583 73 36.4999C73 34.9767 72.9067 33.4752 72.7255 32.0009C50.2996 32.1479 32.148 50.2995 32.001 72.7254C33.4753 72.9066 34.9767 72.9999 36.5 72.9999Z"
        fill="url(#leaf_logo_linear_2)"
      />
      <defs>
        <linearGradient
          id="leaf_logo_linear_1"
          x1="17.6742"
          y1="31.9384"
          x2="17.6742"
          y2="87.7461"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#77E807" />
          <stop offset="1" stop-color="#9FF219" />
        </linearGradient>
        <linearGradient
          id="leaf_logo_linear_2"
          x1="52.5005"
          y1="31.9375"
          x2="52.5005"
          y2="88.541"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#77E807" />
          <stop offset="1" stop-color="#9FF219" />
        </linearGradient>
      </defs>
    </svg>
  </svg>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({ name: "FIconLeafLogo" })
export default class FIconLeafLogo extends Vue {}
</script>
