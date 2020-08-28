<template>
  <v-row>
    <v-col cols="12">
      <f-slider-tabs v-model="index" hide-slider background-color="transparent">
        <template #tabs>
          <v-tab
            v-for="(item, index) in items"
            :key="index"
            :data-value="index"
            :ripple="false"
          >
            <span>{{ item.text }}</span>
          </v-tab>
        </template>
      </f-slider-tabs>
    </v-col>
    <v-col cols="12">
      <f-slider-tabs
        v-model="index2"
        grow
        hide-slider
        background-color="transparent"
      >
        <template #tabs>
          <v-tab
            v-for="(item, index) in items"
            :key="index"
            :data-value="index"
            :ripple="false"
          >
            <span>{{ item.text }}</span>
          </v-tab>
        </template>
      </f-slider-tabs>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class SliderTabs extends Vue {
  index = 0;

  index2 = 0;

  items = [
    {
      text: "group1",
      value: "value1",
    },
    {
      text: "group2",
      value: "group2",
    },
  ];
}
export default SliderTabs;
</script>
