<template>
  <v-container>
    <v-row>
      <v-col class="mb-10">
        <f-tooltip v-model="show" bottom>
          <template #activator="{ on }">
            <f-button color="primary" block @click="on.click">
              Click to toggle
            </f-button>
          </template>
          <div class="tip">{{ tip }}</div>
        </f-tooltip>
      </v-col>

      <v-col class="mb-10">
        <f-tooltip v-model="show" top>
          <template #activator="{ on }">
            <f-button color="primary" block @click="on.click">
              Click to toggle
            </f-button>
          </template>
          <div class="tip">{{ tip }}</div>
        </f-tooltip>
      </v-col>

      <v-col class="mb-10">
        <f-tooltip v-model="show" left>
          <template #activator="{ on }">
            <f-button color="primary" block @click="on.click">
              Click to toggle
            </f-button>
          </template>
          <div class="tip">{{ tip }}</div>
        </f-tooltip>
      </v-col>

      <v-col class="mb-10">
        <f-tooltip v-model="show" right>
          <template #activator="{ on }">
            <f-button color="primary" block @click="on.click">
              Click to toggle
            </f-button>
          </template>
          <div class="tip">{{ tip }}</div>
        </f-tooltip>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class Tooltip extends Vue {
  show = false;
}
export default Tooltip;
</script>
