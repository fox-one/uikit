import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default function(store) {
  const isDark = store.state.app?.dark || false;

  return new Vuetify({
    icons: {},
    theme: {
      dark: isDark,
    },
  });
}
