<template>
  <v-container class="text-center fill-height">
    <v-row align-center>
      <v-col>
        <h1 class="text-h3 primary--text">Whoops, 404</h1>
        <p>The page you were looking for does not exist</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class FourOhFour extends Vue {}
export default FourOhFour;
</script>
