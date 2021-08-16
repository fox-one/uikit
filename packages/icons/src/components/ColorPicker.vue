<template>
  <v-menu :close-on-content-click="false">
    <template #activator="{ on }">
      <v-chip class="picker" :color="color" dark v-on="on">
        <span class="color"></span>
        {{ bindColor }}
      </v-chip>
    </template>

    <v-color-picker
      v-model="bindColor"
      dot-size="25"
      swatches-max-height="200"
    />
  </v-menu>
</template>

<script lang="ts">
import { Component, PropSync, Vue } from "vue-property-decorator";

@Component
class ColorPicker extends Vue {
  @PropSync("color") bindColor!: string;
}
export default ColorPicker;
</script>

<style lang="scss" scoped></style>
