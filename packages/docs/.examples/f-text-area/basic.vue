<template>
  <div>
    <f-text-area v-model="text" placeholder="Text..." />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class TextArea extends Vue {
  text = "";
}
export default TextArea;
</script>
