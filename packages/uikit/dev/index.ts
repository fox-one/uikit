import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import useUIKit from "./uikit";

Vue.config.performance = true;

const vuetify = useUIKit();

const vm = new Vue({
  data: () => ({ isLoaded: document.readyState === "complete" }),

  router,

  vuetify,

  render(h) {
    return this.isLoaded ? h(App) : h();
  }
}).$mount("#app");

// Prevent layout jump while waiting for styles
vm.isLoaded ||
  window.addEventListener("load", () => {
    vm.isLoaded = true;
  });
