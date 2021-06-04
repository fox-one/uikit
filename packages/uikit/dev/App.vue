<template>
  <v-app>
    <v-main>
      <playground></playground>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Playground from "./Playground.vue";

@Component({
  components: {
    Playground
  }
})
class App extends Vue {}
export default App;
</script>
