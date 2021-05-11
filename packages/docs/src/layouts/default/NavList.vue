<template>
  <div class="nav-list">
    <template v-for="(item, index) in nav">
      <nav-list-group :key="index" :item="item" />
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavListGroup from "./NavListGroup.vue";
import { Get } from "vuex-pathify";

@Component({
  components: {
    NavListGroup
  }
})
class NavList extends Vue {
  @Get("app/nav") nav;
}
export default NavList;
</script>
