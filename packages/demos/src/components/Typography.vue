<template>
  <v-row>
    <v-col cols="12">
      <div class="f-headline">Headline</div>
    </v-col>
    <v-col cols="12">
      <div class="f-title-1">Title 1</div>
    </v-col>
    <v-col cols="12">
      <div class="f-title-2">Title 2</div>
    </v-col>
    <v-col cols="12">
      <div class="f-title-3">Title 3</div>
    </v-col>
    <v-col cols="12">
      <div class="f-body-1">Body 1</div>
    </v-col>
    <v-col cols="12">
      <div class="f-body-2">Body 2</div>
    </v-col>
    <v-col cols="12">
      <div class="f-caption">Caption</div>
    </v-col>
    <v-col cols="12">
      <div class="f-superior">Superior</div>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class FTypography extends Vue {}
export default FTypography;
</script>
