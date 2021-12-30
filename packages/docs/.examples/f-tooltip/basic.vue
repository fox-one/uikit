<template>
  <div>
    <div class="my-10">
      <f-tooltip
        v-model="show"
        :bottom="bottom"
        :top="top"
        :left="left"
        :right="right"
      >
        <template #activator="{ on }">
          <f-button color="primary" @click="on.click"> Toggle </f-button>
        </template>

        <div class="tip" style="max-width: 200px">{{ tip }}</div>
      </f-tooltip>
    </div>

    <v-raw>
      <v-col>
        <f-switch v-model="top" label="Top" hide-details />
      </v-col>
      <v-col>
        <f-switch v-model="bottom" label="Bottom" hide-details />
      </v-col>
      <v-col>
        <f-switch v-model="left" label="Left" hide-details />
      </v-col>
      <v-col>
        <f-switch v-model="right" label="Rihgt" hide-details />
      </v-col>
    </v-raw>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class Tooltip extends Vue {
  show = false;

  top = true;

  bottom = false;

  left = false;

  right = false;

  tip =
    "The annual percentage yield (APY) is the real rate of return earned on an investment";
}
export default Tooltip;
</script>
