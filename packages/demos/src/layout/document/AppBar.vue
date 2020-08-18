<template>
  <f-app-bar
    :title="appbar.title"
    :show="appbar.show"
    :back="appbar.back"
    color="transparent"
    @back="handleBack"
  ></f-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State } from "vuex-class";

@Component
class DocumnetAppBar extends Vue {
  @State((state) => state.app.appbar) appbar;

  handleBack() {
    this.$router.back();
  }
}
export default DocumnetAppBar;
</script>
