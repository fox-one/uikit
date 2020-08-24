import Vue from "vue";
import { mapMutations } from "vuex";

export type AppBarMeta = {
  back?: boolean;
  title?: string;
  show?: boolean;
};

function getLocale() {
  const locale = navigator.language;
  return locale.includes("zh") ? "zh" : locale.includes("ja") ? "ja" : "en";
}

export default Vue.extend({
  name: "PageView",

  data: () => {
    return {};
  },

  computed: {
    appbar(): AppBarMeta {
      return {
        title: "",
        back: true,
        show: true,
      };
    },
  },

  methods: {
    ...mapMutations({
      setAppBar: "app/SET_APP_BAR",
    }),
  },

  beforeRouteEnter(to, from, next) {
    next((vm: any) => {
      vm.setAppBar(vm.appbar);

      const locale = getLocale();
      vm.$vuetify.lang.current = locale;
      vm.$i18n.locale = locale;
    });
  },
});
