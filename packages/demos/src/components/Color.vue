<template>
  <v-flex>
    <f-panel class="mb-4">
      <v-row>
        <v-col cols="3" class="body-2">
          Light
        </v-col>
        <v-col cols="3" class="body-2">
          Dark
        </v-col>
        <v-col cols="6"> </v-col>
      </v-row>

      <v-divider />

      <v-row v-for="(item, i) in greyscales" :key="'greyscale-' + item.id">
        <v-col cols="3">
          <div
            class="box border-radius theme--light"
            :class="'f-bg-greyscale-' + item.id"
          ></div>
        </v-col>
        <v-col cols="3">
          <div
            class="box border-radius theme--dark"
            :class="'f-bg-greyscale-' + item.id"
          ></div>
        </v-col>
        <v-col cols="6">
          <div class="f-body-2">Grayscale {{ i + 1 }}</div>
          <div class="f-superior f-greyscale-3">{{ item.text }}</div>
        </v-col>
      </v-row>

      <v-divider />

      <v-row v-for="name in subjects" :key="'subject-' + name">
        <v-col cols="3">
          <div
            class="box border-radius theme--light"
            :class="'f-bg-' + name"
          ></div>
        </v-col>
        <v-col cols="3">
          <div
            class="box border-radius theme--dark"
            :class="'f-bg-' + name"
          ></div>
        </v-col>
        <v-col cols="6" class="f-body-2"> Subject {{ name }} </v-col>
      </v-row>

      <v-divider />

      <v-row v-for="name in status" :key="'subject-' + name">
        <v-col cols="3">
          <div
            class="box border-radius theme--light"
            :class="'f-bg-' + name"
          ></div>
        </v-col>
        <v-col cols="3">
          <div
            class="box border-radius theme--dark"
            :class="'f-bg-' + name"
          ></div>
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
  greyscales = [
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
