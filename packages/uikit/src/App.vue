<template>
  <v-app>
    <div>
      <v-app-bar app>
        Playground
        <v-spacer />
        <v-btn icon small class="mr-0" @click="toggleThemeMode">
          <v-icon>
            {{ icons.mdiBrightness4 }}
          </v-icon>
        </v-btn>
      </v-app-bar>
    </div>

    <v-main>
      <v-container>
        <playground />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Playground from "./Playground.vue";
import { mdiBrightness4 } from "@mdi/js";

@Component({
  components: {
    Playground
  }
})
class App extends Vue {
  icons = {
    mdiBrightness4
  };

  toggleThemeMode() {
    const value = !this.$vuetify.theme.dark;

    this.$vuetify.theme.dark = value;
  }
}
export default App;
</script>
