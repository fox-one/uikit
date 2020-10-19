<template>
  <v-row>
    <v-col>
      <f-phone-input :code.sync="code" :phone.sync="phone">
        <template #append>
          adfa
        </template>
      </f-phone-input>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class PhoneInput extends Vue {
  code = "86";

  phone = "";

  mounted() {
    console.log(this.$i18n);
  }
}
export default PhoneInput;
</script>
