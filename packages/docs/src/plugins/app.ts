/**
 * plugins/app.js
 *
 * Automatically loads and bootstraps files
 * in the `./src/components/` folder.
 */

export function registerComponents(app) {
  // Get all .vue files within `src/components/app`
  const requireComponent = require.context("@/components", true, /\.vue$/);

  for (const file of requireComponent.keys()) {
    const componentConfig = requireComponent(file);

    console.log(file);

    app.component(
      componentConfig.default.name,
      componentConfig.default || componentConfig
    );
  }
}
