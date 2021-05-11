import { Component, Vue } from "vue-property-decorator";
import { Mutation } from "vuex-class";

export type AppBarMeta = {
  back?: boolean;
  title?: string;
  show?: boolean;
};

function getLocale() {
  const locale = navigator.language;

  return locale.includes("zh") ? "zh" : locale.includes("ja") ? "ja" : "en";
}

@Component({
  beforeRouteEnter(to, from, next) {
    next((vm: any) => {
      vm.setAppBar(vm.appbar);

      const locale = getLocale();

      vm.$vuetify.lang.current = locale;
      vm.$i18n.locale = locale;
    });
  }
})
class PageView extends Vue {
  @Mutation("app/SET_APP_BAR") setAppBar;

  get appbar(): Partial<AppBarMeta> {
    return {
      title: "",
      back: true,
      show: true
    };
  }

  get component() {
    return this.$route.params.component;
  }
}

export default PageView;
