<template>
  <f-app-bar v-bind="propData">
    <span>
      <v-img :src="require('@docs/assets/images/logo.png')" width="64" />
    </span>

    <v-spacer />

    <v-btn icon small class="mr-0" @click="toggleThemeMode">
      <v-icon> $mdiBrightness4 </v-icon>
    </v-btn>
  </f-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class AppBar extends Vue {
  get propData() {
    return {
      app: true,
      flat: true
    };
  }

  toggleThemeMode() {
    const value = !(this as any).$vuetify.theme.dark;

    (this as any).$vuetify.theme.dark = value;
  }
}
export default AppBar;
</script>
