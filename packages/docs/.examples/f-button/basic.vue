<template>
  <div>
    <v-col>
      <f-button class="mx-2" large color="primary">normal</f-button>
      <f-button class="mx-2" large disabled color="primary">disabled</f-button>
      <f-button class="mx-2" large loading color="primary">loading</f-button>
      <f-button class="mx-2" large text color="primary">normal</f-button>
    </v-col>
    <v-col>
      <f-button class="mx-2" color="primary">normal</f-button>
      <f-button class="mx-2" disabled color="primary">disabled</f-button>
      <f-button class="mx-2" loading color="primary">loading</f-button>
      <f-button class="mx-2" text color="primary">normal</f-button>
    </v-col>
    <v-col>
      <f-button class="mx-2" small color="primary">normal</f-button>
      <f-button class="mx-2" small disabled color="primary">disabled</f-button>
      <f-button class="mx-2" small loading color="primary">loading</f-button>
      <f-button class="mx-2" small text color="primary">normal</f-button>
    </v-col>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class Button extends Vue {}
export default Button;
</script>
