<template>
  <f-list>
    <f-list-item class="greyscale_5">
      <template #head>
        <v-icon size="24" color="primary">$FIconCrowdFill</v-icon>
      </template>
      <template #body>
        <v-list-item-content>
          <v-list-item-title>Yo?</v-list-item-title>
        </v-list-item-content>
      </template>
      <template #tail>
        <f-switch v-model="value" hide-details />
      </template>
    </f-list-item>
  </f-list>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class List extends Vue {}
export default List;
</script>
