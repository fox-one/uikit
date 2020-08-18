import { MutationTree } from "vuex";

const state = () => ({
  appbar: {
    title: "",
    show: true,
    back: false,
  },
});

export type AppState = {
  appbar: {
    title: string;
    show: boolean;
    back: boolean;
  };
};

const mutations: MutationTree<AppState> = {
  SET_APP_BAR(state, data) {
    state.appbar = { ...state.appbar, ...data };
  },
};

export default {
  namespaced: true,
  state,
  mutations
}