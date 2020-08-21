import Vue from "vue";
import Vuex from "vuex";
import modules from "./modules";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  plugins: [createPersistedState({ key: "app", paths: ["app.dark"] })],
  modules,
});
