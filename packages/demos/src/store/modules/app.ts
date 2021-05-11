import { MutationTree } from "vuex";

const state = () => ({
  appbar: {
    back: false,
    show: true,
    title: ""
  },
  dark: false,

  toast: {
    color: "info",
    message: "",
    show: false
  }
});

export type AppState = {
  dark: boolean;
  appbar: {
    title: string;
    show: boolean;
    back: boolean;
  };
  toast: {
    show: boolean;
    color: string;
    message: string;
  };
};

const mutations: MutationTree<AppState> = {
  SET_APP_BAR(state, data) {
    state.appbar = { ...state.appbar, ...data };
  },
  SET_THEME_DARK(state, value) {
    state.dark = value;
  },
  SET_TOAST(state, { color = "info", message = "", show = true }) {
    state.toast.show = show;
    state.toast.message = message;
    state.toast.color = color;
  }
};

export default {
  namespaced: true,
  state,
  mutations
};
