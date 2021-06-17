<template>
  <v-app>
    <default-app-bar />

    <default-view />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DefaultAppBar from "./Appbar.vue";
import DefaultView from "./View.vue";

@Component({
  components: {
    DefaultAppBar,
    DefaultView
  }
})
class DefaultLayout extends Vue {}
export default DefaultLayout;
</script>
