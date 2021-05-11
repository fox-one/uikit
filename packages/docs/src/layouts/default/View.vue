<template>
  <v-container class="app-view">
    <nav-list class="app-nav-list" />

    <v-fade-transition hide-on-leave="">
      <router-view :key="$route.path"></router-view>
    </v-fade-transition>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavList from "./NavList.vue";

@Component({
  components: {
    NavList
  }
})
class DefaultView extends Vue {}
export default DefaultView;
</script>

<style lang="scss" scoped>
.app-view {
  position: relative;
  display: flex;

  .app-nav-list {
    padding-top: 64px;
    margin-right: 40px;
  }
}
</style>
