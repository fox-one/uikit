import Vue from "vue";
import VueI18n from "vue-i18n";
import vuetify from "./use-uikit";
import messages from "./messages";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  layout: "fullscreen"
};

Vue.use(VueI18n);

export const decorators = [
  (story, context) => {
    const wrapped = story(context);

    return Vue.extend({
      vuetify,
      i18n: new VueI18n({ locale: "en", messages }),
      components: { wrapped },
      props: {
        dark: {
          type: Boolean,
          default: context.args.dark
        },
        locale: {
          type: String,
          default: "en"
        }
      },
      watch: {
        dark: {
          immediate: true,
          handler(val) {
            this.$vuetify.theme.dark = val;
          }
        },
        locale: {
          immediate: true,
          handler(val) {
            this.$vuetify.lang.current = val;
          }
        }
      },
      template: `
      <v-app>
        <v-container fluid>
          <wrapped />
        </v-container>
      </v-app>
    `
    });
  }
];
