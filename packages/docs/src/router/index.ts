import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import { layout, route } from "@docs/utils/route";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  layout({
    name: "Default",
    children: [route({ name: "Documentation" })],
    path: "/:category/:page/"
  })
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
