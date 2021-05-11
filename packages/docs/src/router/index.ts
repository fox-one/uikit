import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import { layout, route, locale, trailingSlash } from "@docs/utils/route";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  locale([
    layout({
      name: "Default",
      children: [route({ name: "Documentation" })],
      path: ":category/:page/"
    })
  ])
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach(({ hash, path }, from, next) => {
  return path.endsWith("/") ? next() : next(trailingSlash(path) + hash);
});

export default router;
