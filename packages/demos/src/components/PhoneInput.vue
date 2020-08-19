<template>
  <v-row>
    <v-col>
      <f-phone-input :code.sync="code" :phone.sync="phone" />
    </v-col>
  </v-row>
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
