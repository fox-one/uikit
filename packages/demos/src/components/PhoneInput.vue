<template>
  <f-panel>
    <f-phone-input :code.sync="code" :phone.sync="phone"> </f-phone-input>
    <div class="mt-4 f-body-2">Your number is {{ phone }}</div>
  </f-panel>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class PhoneInput extends Vue {
  code = "86";

  phone = "1234";

  mounted() {
    console.log(this.$i18n);
  }
}
export default PhoneInput;
</script>
