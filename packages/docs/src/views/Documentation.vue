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

import type { Route } from "vue-router";
import type { Store } from "vuex";

async function load(route: Route) {
  const { category, page } = route.params;
  const context = await import(
    /* webpackChunkName: "documentation-[request]" */
    // @ts-ignore
    "@docs/pages/index.ts"
  );
  const path = `./${category}/${page}.md`;

  try {
    return context.default(path);
  } catch (err) {
    console.log(err);

    return {
      vue: {
        component: error()
      }
    };
  }
}

@Component
class DocumentView extends Vue {
  component = null;

  static async asyncData(opts: { route: Route; store: Store<any> }) {
    console.log("in async data", opts);

    const { route } = opts;
    const md = await load(route);

    console.log("async data loaded", md);
  }

  mounted() {
    console.log("mounted");
  }

  async created() {
    console.log("created");
    await DocumentView.asyncData({ route: this.$route, store: this.$store });

    // this.init(this.md);
  }
}
export default DocumentView;
</script>
