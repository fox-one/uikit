<template>
  <v-list>
    <template v-for="(item, index) in componentsList">
      <v-list-item :key="index" @click="handleViewComponent(item)">
        <v-list-item-title>
          {{ item.displayName }}
        </v-list-item-title>
        <v-list-item-action>
          <v-icon>
            {{ mdiChevronRight }}
          </v-icon>
        </v-list-item-action>
      </v-list-item>
    </template>
  </v-list>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";
import { mdiChevronRight } from "@mdi/js";

const requireComponent = require.context("../components", true, /\.vue$/);
const componentsList = requireComponent.keys().map((key) => {
  const componentName = upperFirst(
    camelCase(key.replace(/\.\//, "").replace(/\.\w+$/, "")),
  );
  const displayName = key.replace(/^[.]+\//, "").replace(/.vue$/, "");
  return { componentName, displayName };
});

@Component
class Page extends Vue {
  mdiChevronRight = mdiChevronRight;
  componentsList = componentsList;

  handleViewComponent(item) {
    this.$router.push({
      name: "page-component",
      params: { component: item.componentName },
    });
  }
}
export default Page;
</script>
