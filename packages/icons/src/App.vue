<template>
  <v-app>
    <v-container>
      <h3 class="mt-10">3P</h3>
      <icons type="3p" />

      <h3 class="mt-10">4P</h3>
      <icons type="4p" />

      <h3 class="mt-10">6P</h3>
      <icons type="6p" />

      <h3 class="mt-10">8P</h3>
      <icons type="8p" />

      <h3 class="mt-10">colorful</h3>
      <icons type="colorful" />

      <div class="my-10">
        <v-col>
          <color-picker :color.sync="color" />
        </v-col>

        <v-col>
          <v-switch v-model="dark" label="Dark"></v-switch>
        </v-col>
      </div>
    </v-container>
  </v-app>
</template>
<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import ColorPicker from "./components/ColorPicker.vue";
import Icons from "./components/Icons.vue";

@Component({
  components: {
    ColorPicker,
    Icons
  }
})
class App extends Vue {
  dark = false;

  color = "#000000";

  @Watch("dark")
  handleThemeChange() {
    this.$vuetify.theme.dark = this.dark;
  }
}

export default App;
</script>
