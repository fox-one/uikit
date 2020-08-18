import Vue from "vue";
import { mapMutations } from "vuex";
import { debug } from "console";

export type AppBarMeta = {
  back?: boolean;
  title?: string;
  show?: boolean;
};

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
    });
  },
});
