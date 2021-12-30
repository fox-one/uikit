<template>
  <div>
    <f-tabs
      v-model="index"
      ref="tabs"
      :grow="true"
      slider-size="2"
      slider-length="40"
    >
      <v-tab v-for="(tab, index) in tabs" :key="index" :ripple="false">
        <span>{{ tab.text }}</span>
      </v-tab>
    </f-tabs>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class Tabs extends Vue {
  index = 1;

  tabs = [
    {
      text: "Supply"
    },
    {
      text: "Borrow"
    }
  ];
}
export default Tabs;
</script>
