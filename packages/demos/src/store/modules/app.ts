import { MutationTree } from "vuex";

const state = () => ({
  dark: false,
  appbar: {
    title: "",
    show: true,
    back: false,
  },
});

export type AppState = {
  dark: boolean;
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
  SET_THEME_DARK(state, value) {
    state.dark = value;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
