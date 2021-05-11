<template>
  <v-app>
    <v-container>
      <div class="title">Outline Icons</div>
      <div class="icons">
        <icon
          v-for="(icon, index) in outline"
          :key="index + '_1'"
          :icon="icon"
          :color="color"
          :size="size"
        />
      </div>

      <div class="title">Fill Icons</div>
      <div class="icons">
        <icon
          v-for="(icon, index) in fill"
          :key="index + '_2'"
          :icon="icon"
          :color="color"
          :size="size"
        />
      </div>

      <div class="title">Colorful Icons</div>
      <div class="icons">
        <icon
          v-for="(icon, index) in colorful"
          :key="index + '_2'"
          :icon="icon"
          :color="color"
          :size="size"
        />
      </div>

      <div class="my-10">
        <v-col>
          <div>Color</div>
          <color-picker :color.sync="color" />
        </v-col>

        <v-col>
          <div>Size: {{ size }} px</div>
          <v-slider
            v-model="size"
            hint="size"
            max="400"
            min="12"
            step="4"
          ></v-slider>
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
import Icon from "./components/Icon.vue";
import meta from "./meta.json";

@Component({
  components: {
    ColorPicker,
    Icon
  }
})
class App extends Vue {
  outline = meta.outline.map((x) => x.componentName);

  fill = meta.fill.map((x) => x.componentName);

  colorful = meta.colorful.map((x) => x.componentName);

  color = "#000000";

  size = "24";

  dark = false;

  @Watch("dark")
  handleThemeChange() {
    this.$vuetify.theme.dark = this.dark;
  }
}

export default App;
</script>

<style lang="scss">
.title {
  font-size: 20px;
  margin: 10px 0;
}

.icons {
  display: flex;
  flex-wrap: wrap;
}
</style>
