<template>
  <v-fade-transition appear>
    <router-view />
  </v-fade-transition>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class App extends Vue {}
export default App;
</script>
