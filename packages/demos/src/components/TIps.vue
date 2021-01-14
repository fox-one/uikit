<template>
  <v-row>
    <v-col cols="12">
      <f-tip type="warning">
        WARNING: UIKit has no brain, use your own!
        <br />
        Code: 1234
      </f-tip>
    </v-col>
    <v-col cols="12">
      <f-tip type="error">
        ERROR: Failed to restart your brain, eat more!
        <br />
        Code: 0001
      </f-tip>
    </v-col>
    <v-col cols="12">
      <f-tip type="info">
        This is an important notice.
        <br />
        Read it and you'll get rewards.
      </f-tip>
    </v-col>
    <v-col>
      <f-tip type="text">
        Some boring text here, make no sense. <br />
        Just like your life.
      </f-tip>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class FTips extends Vue {}
export default FTips;
</script>
