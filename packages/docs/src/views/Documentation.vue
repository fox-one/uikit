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
import { error } from "@docs/utils/route";

import { Sync } from "vuex-pathify";

import type { Route } from "vue-router";

async function load(route: Route) {
  const { category, page } = route.params;
  const context = await import(
    /* webpackChunkName: "documentation-[request]" */
    "@docs/pages/en.js"
  );
  const path = `./${category}/${page}.md`;

  try {
    return context.default(path);
  } catch (err) {
    return {
      vue: {
        component: error()
      }
    };
  }
}

@Component
class DocumentView extends Vue {
  @Sync("pages") pages;

  component = null;

  async created() {
    const md = await load(this.$route);
    const { toc = [], vue = {} } = md;

    this.pages.md = md;
    this.pages.toc = toc;
    this.component = vue.component;
  }
}
export default DocumentView;
</script>
