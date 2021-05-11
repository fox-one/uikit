<template>
  <v-container>
    <p class="text-h5 mt-5">Size</p>
    <p class="body-2">VBtn</p>
    <v-col>
      <v-btn x-small class="mx-2">x-small</v-btn>
      <v-btn small class="mx-2">small</v-btn>
      <v-btn class="mx-2">normal</v-btn>
      <v-btn large class="mx-2">large</v-btn>
      <v-btn x-large class="mx-2">x-large</v-btn>
    </v-col>
    <p class="body-2">FButton</p>
    <v-col>
      <f-button x-small class="mx-2">x-small</f-button>
      <f-button small class="mx-2">small</f-button>
      <f-button class="mx-2">normal</f-button>
      <f-button large class="mx-2">large</f-button>
      <f-button x-large class="mx-2">x-large</f-button>
    </v-col>
    <p class="text-h5 mt-5">Color</p>
    <v-col>
      <f-button color="primary" class="mx-2">primary</f-button>
      <f-button color="warning" class="mx-2">warning</f-button>
      <f-button color="info" class="mx-2">info</f-button>
      <f-button color="error" class="mx-2">error</f-button>
    </v-col>

    <p class="text-h5 mt-5">State</p>
    <v-col>
      <f-button loading color="primary" class="mx-2"></f-button>
      <f-button disabled color="primary" class="mx-2">disabled</f-button>
    </v-col>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class FTypography extends Vue {
  disabledAll = true;
  activeAll = false;
}
export default FTypography;
</script>
