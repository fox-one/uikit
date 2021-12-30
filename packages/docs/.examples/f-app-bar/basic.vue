<template>
  <div>
    <f-app-bar back title="Test" class="mb-10" @back="handleBack" />

    <f-app-bar :nav-icon="navIcon" title="Test" class="mb-10" />

    <f-app-bar :title="title" center />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { VIcon, VBtn, VChip } from "vuetify/lib";
import { mdiAccount } from "@mdi/js";

@Component
class Appbar extends Vue {
  get navIcon() {
    const h = this.$createElement;

    return h(VBtn, { props: { icon: true } }, [h(VIcon, mdiAccount)]);
  }

  get title() {
    const h = this.$createElement;

    return h(VChip, "Test");
  }

  handleBack() {
    console.log("back");
  }
}
export default Appbar;
</script>
