<template>
  <f-panel>
    <f-phone-input v-model="phone" :code.sync="code"> </f-phone-input>
    <div class="mt-4 f-body-2">Your number is {{ code }} {{ phone }}</div>
  </f-panel>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class PhoneInput extends Vue {
  code = "86";

  phone = "";
}
export default PhoneInput;
</script>
