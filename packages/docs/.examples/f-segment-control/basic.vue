<template>
  <div>
    <f-segment-control
      v-model="value"
      borderless
      mandatory
      color="greyscale_7"
      active-class="primary"
    >
      <f-button
        v-for="(item, index) in durations"
        :key="index"
        :ripple="false"
        :value="item.value"
      >
        <span>{{ item.text }}</span>
      </f-button>
    </f-segment-control>

    <div class="pt-5">Duration: {{ value }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class SegmentControl extends Vue {
  value = "week";

  get durations() {
    return [
      { value: "week", text: "Week" },
      { value: "month", text: "Month" },
      { value: "year", text: "Year" }
    ];
  }
}
export default SegmentControl;
</script>
