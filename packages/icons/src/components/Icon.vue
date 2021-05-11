<template>
  <div class="icon">
    <v-icon :color="color" :size="size">
      {{ "$" + icon }}
    </v-icon>
    <span class="caption">
      {{ icon }}
    </span>
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
  margin: 12px;
  display: flex;
  max-width: 100%;
  flex-direction: column;
  align-items: center;
}
</style>
