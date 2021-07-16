<template>
  <div>
    <f-panel class="mb-4">
      <div class="f-caption f-greyscale-3 mb-4">Slider Tabs</div>
      <f-slider-tabs v-model="index">
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
      <div class="text-left ma-4 f-body-2 f-greyscale-3">
        You've selected tab {{ index }}
      </div>

      <f-slider-tabs v-model="index" grow color="primary">
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
      <div class="text-center ma-4 f-body-2 f-greyscale-3">
        You've selected tab {{ index }}
      </div>
    </f-panel>
    <f-panel>
      <div class="f-caption f-greyscale-3 mb-4">Button Tabs</div>
      <f-button-tabs v-model="index">
        <template #tabs>
          <v-btn
            v-for="(item, index) in items"
            :key="index"
            :data-value="index"
            :ripple="false"
          >
            <span>{{ item.text }}</span>
          </v-btn>
        </template>
      </f-button-tabs>
      <div class="text-left ma-4 f-body-2 f-greyscale-3">
        You've selected tab {{ index }}
      </div>
      <f-button-tabs v-model="index" grow active-class="primary white--text">
        <template #tabs>
          <v-btn
            v-for="(item, index) in items"
            :key="index"
            :value="index"
            :ripple="false"
          >
            <span>{{ item.text }}</span>
          </v-btn>
        </template>
      </f-button-tabs>
      <div class="text-center ma-4 f-body-2 f-greyscale-3">
        You've selected tab {{ index }}
      </div>
    </f-panel>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class Tabs extends Vue {
  index = 0;

  items = [
    {
      text: "group1",
      value: "value1"
    },
    {
      text: "group2",
      value: "group2"
    },
    {
      text: "group3",
      value: "group3"
    }
  ];
}
export default Tabs;
</script>
