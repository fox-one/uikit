<template>
  <v-row>
    <f-phone-input :code.sync="code" :phone.sync="phone" />
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class PhoneInput extends Vue {
  code = "";

  phone = "";
}
export default PhoneInput;
</script>
