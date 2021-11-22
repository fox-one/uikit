<template>
  <v-icon
    size="14"
    color="greyscale_1"
    class="f-hint-activator"
    v-bind="$attrs"
  >
    $info
  </v-icon>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { VIcon } from "vuetify/lib";

@Component({
  components: {
    VIcon
  }
})
class FHintActivator extends Vue {}
export default FHintActivator;
</script>
