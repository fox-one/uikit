<template>
  <div>
    <f-panel padding="0" class="pa-4 mb-4">
      <v-row>
        <v-col cols="6">
          <f-switch v-model="first" />
        </v-col>
        <v-col cols="6" class="d-flex align-center">
          <span>Value: {{ first }}</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <f-switch v-model="second" />
        </v-col>
        <v-col cols="6" class="d-flex align-center">
          <span>Value: {{ second }}</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <f-switch :disabled="true" />
        </v-col>
        <v-col cols="6" class="d-flex align-center">
          <span>Disabled</span>
        </v-col>
      </v-row>
    </f-panel>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class Switch extends Vue {
  first = true;
  second = false;
}
export default Switch;
</script>
