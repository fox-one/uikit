<template>
  <div>
    <f-input v-model="value" label="Type something here" class="mb-10" />

    <f-input
      v-model="value"
      :clearable="true"
      hint="click the clear button to clear content"
      label="Type something here"
      class="mb-10"
      persistent-hint
    />

    <f-input
      v-model="username"
      :hint="`hello ${username}`"
      :rules="[rules.moreThan5Letters]"
      label="Type username here"
      class="mb-10"
      persistent-hint
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class FInputDemo extends Vue {
  value = "";

  username = "";

  rules = {
    moreThan5Letters: (val) =>
      val.length > 5 || "username should more than 5 letters"
  };
}
export default FInputDemo;
</script>
