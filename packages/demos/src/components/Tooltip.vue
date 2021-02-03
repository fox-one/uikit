<template>
  <v-row>
    <v-col class="mb-10">
      <f-tooltip v-model="show" bottom>
        <template #activator="{}">
          <f-button type="primary" block @click="show = !show">
            Click to toggle
          </f-button>
        </template>
        <div class="tip">Hello from bottm!</div>
      </f-tooltip>
    </v-col>
    <v-col>
      <f-tooltip v-model="show2" top>
        <template #activator="{}">
          <f-button type="primary" block @click="show2 = !show2">
            Click to toggle
          </f-button>
        </template>
        <div class="tip">Hello from top!</div>
      </f-tooltip>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class Tooltip extends Vue {
  show = false;
  show2 = false;
}
export default Tooltip;
</script>
