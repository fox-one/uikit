<template>
  <f-app-bar
    :title="appbar.title"
    :show="appbar.show"
    :back="appbar.back"
    @back="handleBack"
  >
    <v-spacer />
    <v-btn icon small @click="handleDarkMode">
      <v-icon>
        {{ icons.mdiBrightness4 }}
      </v-icon>
    </v-btn>
  </f-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State } from "vuex-class";
import { mdiBrightness4 } from "@mdi/js";

@Component
class DocumnetAppBar extends Vue {
  @State((state) => state.app.appbar) appbar;

  icons = {
    mdiBrightness4,
  };

  handleDarkMode() {
    const value = !this.$vuetify.theme.dark;
    this.$store.commit("app/SET_THEME_DARK", value);
    this.$vuetify.theme.dark = value;
  }

  handleBack() {
    this.$router.back();
  }
}
export default DocumnetAppBar;
</script>
