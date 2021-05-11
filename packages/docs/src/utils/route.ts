import kebabCase from "lodash/kebabCase";

import type { RouteConfig } from "vue-router";

export function locale(children) {
  return layout({
    name: "Locale",
    children,
    path: "/:locale"
  });
}

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

export function trailingSlash(str) {
  return str.endsWith("/") ? str : str + "/";
}

export function rpath(path = "") {
  const locale = "en";
  const [url, hash] = path.split("#");

  const route = [locale, ...url.split("/").filter((p) => !!p && p !== locale)];

  return `/${route.join("/")}/${hash ? `#${hash}` : ""}`;
}
