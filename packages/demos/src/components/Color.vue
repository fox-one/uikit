<template>
  <v-flex>
    <f-panel class="mb-4">
      <v-row>
        <v-col cols="4">
          Light
        </v-col>
        <v-col cols="4">
          Dark
        </v-col>
        <v-col cols="4"> </v-col>
      </v-row>

      <v-divider />

      <v-row v-for="item in grayscales" :key="'grayscale-' + item.id">
        <v-col cols="3">
          <div
            class="box theme--light"
            :class="'f-bg-grayscale-' + item.id"
          ></div>
        </v-col>
        <v-col cols="3">
          <div
            class="box theme--dark"
            :class="'f-bg-grayscale-' + item.id"
          ></div>
        </v-col>
        <v-col cols="6">
          <div class="f-body-2">Grayscale {{ i }}</div>
          <div class="f-superior f-grayscale-3">{{ item.text }}</div>
        </v-col>
      </v-row>

      <v-divider />

      <v-row v-for="name in subjects" :key="'subject-' + name">
        <v-col cols="3">
          <div class="box theme--light" :class="'f-bg-' + name"></div>
        </v-col>
        <v-col cols="3">
          <div class="box theme--dark" :class="'f-bg-' + name"></div>
        </v-col>
        <v-col cols="6" class="f-body-2"> Subject {{ name }} </v-col>
      </v-row>

      <v-divider />

      <v-row v-for="name in status" :key="'subject-' + name">
        <v-col cols="3">
          <div class="box theme--light" :class="'f-bg-' + name"></div>
        </v-col>
        <v-col cols="3">
          <div class="box theme--dark" :class="'f-bg-' + name"></div>
        </v-col>
        <v-col cols="6" class="f-body-2"> {{ name }} </v-col>
      </v-row>
    </f-panel>
  </v-flex>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class FColor extends Vue {
  grayscales = [
    { id: 1, text: "Used for both body and titles." },
    { id: 2, text: "Used for both body and titles." },
    { id: 3, text: "Used for captions." },
    { id: 4, text: "Used for captions." },
    { id: 5, text: "Used for background." },
    { id: 6, text: "Used for background." },
  ];

  subjects = ["ocean", "pink", "chives"];

  status = ["error", "success"];
}
export default FColor;
</script>

<style lang="scss" scoped>
.box {
  display: block;
  content: " ";
  height: 44px;
}
</style>
