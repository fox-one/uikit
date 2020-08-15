import Vue from "vue";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";

const requireComponent = require.context("./", true, /\.vue$/);

requireComponent.keys().forEach((fileName) => {
  const componentName = upperFirst(
    camelCase(fileName.replace(/\.\//, "").replace(/\.\w+$/, "")),
  );

  Vue.component(componentName, (resolve) => {
    const componentConfig = requireComponent(fileName);

    resolve(componentConfig.default || componentConfig);
  });
});
