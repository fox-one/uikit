import { make } from "vuex-pathify";

const state = {
  nav: []
};

const mutations = make.mutations(state);

export default {
  namespaced: true,
  state,
  mutations
};
