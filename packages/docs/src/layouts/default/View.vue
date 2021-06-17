<template>
  <v-container>
    <v-fade-transition hide-on-leave="">
      <router-view :key="$route.path"></router-view>
    </v-fade-transition>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class DefaultView extends Vue {}
export default DefaultView;
</script>
