<template>
  <v-app>
    <default-app-bar />

    <!-- <default-drawer /> -->

    <v-main>
      <default-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DefaultAppBar from "./Appbar.vue";
import DefaultDrawer from "./Drawer.vue";
import DefaultView from "./View.vue";
import nav from "@docs/data/nav.json";
import { Sync } from "vuex-pathify";

@Component({
  components: {
    DefaultAppBar,
    DefaultView,
    DefaultDrawer
  },
  beforeRouteEnter(to, from, next) {
    next((vm: any) => vm.init());
  }
})
class DefaultLayout extends Vue {
  @Sync("pages/pages") pages;

  @Sync("app/nav") nav;

  locale = "en";

  init() {
    this.getPages();
  }

  async getPages() {
    const pages = await import(
      /* webpackChunkName: "locale-pages-[request]" */
      `@docs/pages/${this.locale}.js`
    );

    this.pages = { ...pages.default };
    this.genNav();
  }

  genItem(item) {
    const group = item.group || item.title;
    const page = item.title;
    const title = { en: this.$t(item.title), zh: this.$t(item.title, "zh") };
    const url = [this.locale, group, page];
    const to = `/${url.join("/")}/`;
    const items = item.items && this.genItems(item.items, group);

    return {
      ...item,
      items,
      to,
      title,
      group
    };
  }

  genItems(items, group) {
    return items.map((item) => {
      return this.genItem({ title: item, group });
    });
  }

  genNav() {
    const items: any[] = [];

    for (const item of nav) {
      items.push(this.genItem(item));
    }

    this.nav = items;
  }
}
export default DefaultLayout;
</script>
