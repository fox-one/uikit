<template>
  <div class="icon">
    <v-icon :color="color" :size="size">
      {{ "$" + icon }}
    </v-icon>
    <div class="caption">
      {{ icon }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
class Icon extends Vue {
  @Prop() color!: string;

  @Prop() size!: string;

  @Prop() icon!: string;
}
export default Icon;
</script>

<style lang="scss" scoped>
.icon {
  text-align: center;
  min-width: 200px;
}
</style>
