<template>
  <f-panel>
    <f-input v-model="value" :label="label"> </f-input>
    <div class="my-4 f-body-2">Your input is {{ value }}</div>
    <f-input
      v-model="value"
      :label="label"
      :clearable="true"
      :clearIcon="mdiClose"
    >
    </f-input>
  </f-panel>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mdiClose } from "@mdi/js";

@Component
class Input extends Vue {
  label = "Type something here";
  value = "Are you ok";

  mdiClose = mdiClose;
}
export default Input;
</script>
