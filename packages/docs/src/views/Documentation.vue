<template>
  <v-container fluid tag="section">
    <v-responsive>
      <keep-alive max="3">
        <component :is="component" />
      </keep-alive>
    </v-responsive>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { error } from "@/utils/route";

import type { Route } from "vue-router";
import type { Store } from "vuex";

async function load(opts: { route: Route; store: Store<any> }) {
  const { route, store } = opts;
  const { category, page } = route;
  const context = await import(
    /* webpackChunkName: "documentation-[request]" */
    // @ts-ignore
    "@/pages/index.ts"
  );
  const path = `./${category}/${page}.vue`;

  try {
    return context.default(path);
  } catch (error) {
    return {
      vue: {
        component: error()
      }
    };
  }
}

@Component
class DocumentView extends Vue {
  mounted() {
    return this.$store;
  }
}
export default DocumentView;
</script>
