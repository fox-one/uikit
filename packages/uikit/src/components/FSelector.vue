<template>
  <v-bottom-sheet v-model="bindShow" v-bind="$attrs">
    <template v-slot:activator="{ on }">
      <slot name="activator" :on="on" />
    </template>
    <v-sheet class="assets-sheet">
      <div class="px-3 pb-2">
        <v-text-field
          v-model="bindFilter"
          hide-details
          single-line
          :placeholder="$t('common.search')"
        />
      </div>
      <slot />
    </v-sheet>
  </v-bottom-sheet>
</template>

<script lang="ts">
import { Component, Vue, PropSync } from "vue-property-decorator";

@Component
class FSelector extends Vue {
  @PropSync("show") bindShow;

  @PropSync("filter") bindFilter;
}
export default FSelector;
</script>

<style lang="scss" scoped>
.assets-sheet {
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}
</style>
