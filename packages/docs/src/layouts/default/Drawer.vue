<template>
  <v-navigation-drawer
    id="default-drawer"
    v-model="drawer"
    app
    floating
    width="300"
  >
    <keep-alive>
      <nav-list />
    </keep-alive>

    <div class="pt-12" />
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavList from "./NavList.vue";

@Component({
  components: {
    NavList
  }
})
class DefaultDrawer extends Vue {
  drawer = true;
}
export default DefaultDrawer;
</script>
