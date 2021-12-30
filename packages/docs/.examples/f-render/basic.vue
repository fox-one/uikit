<template>
  <div>
    <f-render :nodes="nodes" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class Render extends Vue {
  get nodes() {
    return this.$createElement("div", ["I am VNode"]);
  }
}
export default Render;
</script>
