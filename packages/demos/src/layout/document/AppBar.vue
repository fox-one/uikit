<template>
  <f-app-bar
    :title="appbar.title"
    :show="appbar.show"
    :back="appbar.back"
    :mixin-immersive="mixinImmersive"
    @back="handleBack"
  >
    <v-btn icon small @click="toggleThemeMode" class="mr-0">
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
import { isMixin } from "../../utils/helper";

@Component
class DocumnetAppBar extends Vue {
  @State((state) => state.app.appbar) appbar;

  icons = {
    mdiBrightness4,
  };

  get mixinImmersive() {
    return isMixin();
  }

  toggleThemeMode() {
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
