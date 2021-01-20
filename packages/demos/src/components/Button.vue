<template>
  <div>
    <f-panel padding="0" class="px-4 mb-4">
      <v-row>
        <v-col cols="6">
          <v-switch
            v-model="disabledAll"
            label="Disable all"
            :hide-details="true"
          ></v-switch>
        </v-col>
        <v-col cols="6">
          <v-switch
            v-model="activeAll"
            label="Active all"
            :hide-details="true"
          ></v-switch>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <f-button type="primary" :disabled="disabledAll">Primary</f-button>
        </v-col>
        <v-col cols="12">
          <f-button type="secondary" :disabled="disabledAll"
            >Secondary</f-button
          >
        </v-col>
        <v-col cols="12">
          <f-button type="warning" :disabled="disabledAll">Warning</f-button>
        </v-col>
        <v-col cols="12">
          <f-button type="subtitle" :disabled="disabledAll">subtitle</f-button>
        </v-col>
        <v-col cols="12">
          <f-button type="text" :disabled="disabledAll">Text</f-button>
        </v-col>
      </v-row>
    </f-panel>
    <f-panel padding="0" class="px-4">
      <v-row>
        <v-col cols="12">
          <f-button type="primary" block
            >I agree with that announcement</f-button
          >
        </v-col>
        <v-col cols="12">
          <f-button type="primary" dark color="pink" block>Pink</f-button>
        </v-col>
        <v-col cols="12">
          <f-button type="primary" dark color="chives" block>Chives</f-button>
        </v-col>
      </v-row>
    </f-panel>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class FTypography extends Vue {
  disabledAll = false;
  activeAll = false;
}
export default FTypography;
</script>
