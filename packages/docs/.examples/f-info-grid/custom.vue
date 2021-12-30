<template>
  <f-info-grid>
    <f-info-grid-item v-for="(item, ix) in customItems" :key="ix" :index="ix">
      <div>
        <div class="d-flex align-center mb-2">
          <v-icon class="mr-2">{{ item.icon }}</v-icon>
          <div class="f-body-2">{{ item.title }}</div>
        </div>
        <f-switch class="ml-1">{{ item.title }}</f-switch>
      </div>
    </f-info-grid-item>
  </f-info-grid>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class InfoGrid extends Vue {
  customItems = [
    {
      icon: "$FIconCrowdFill",
      title: "A title"
    },
    {
      icon: "$FIconCrowdFill",
      title: "A title"
    }
  ];
}
export default InfoGrid;
</script>
