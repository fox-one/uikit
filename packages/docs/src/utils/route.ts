import kebabCase from "lodash/kebabCase";

import type { RouteConfig } from "vue-router";

export function layout(opts: {
  name?: string;
  children?: RouteConfig[];
  path: string;
}): RouteConfig {
  const { children = [], name = "Default", path = "" } = opts;
  const dir = kebabCase(name);

  return {
    children,
    component: () => import(`@docs/layouts/${dir}/index.vue`),
    path
  };
}

export function route(opts: {
  name: string;
  path?: string;
  strict?: boolean;
}): RouteConfig {
  const { name, path = "", strict = true } = opts;

  return {
    name,
    component: () =>
      import(
        /* webpackChunkName: "views-[request]" */
        `@docs/views/${name}`
      ),
    path,
    pathToRegexpOptions: { strict }
  };
}

export function error(code = 404) {
  return import(
    /* webpackChunkName: "error-[request]" */
    `@docs/views/errors/${code}.vue`
  );
}
