<template>
  <div class="color-palette">
    <div
      v-for="(color, index) in colors"
      :key="index"
      class="color"
      :style="{ backgroundColor: color.value, color: color.textColor }"
    >
      <div>{{ color.text }}</div>
      <div class="value">{{ color.value }}</div>
    </div>
  </div>
</template>

<script>
import { capitalize } from "lodash";

export default {
  name: "ColorPalette",

  props: { type: String },

  data: () => {
    return {};
  },

  computed: {
    light() {
      return this.$vuetify.theme.themes.light;
    },
    dark() {
      return this.$vuetify.theme.themes.dark;
    },
    colors() {
      if (this.type === "greyscales") {
        return this.greyscales;
      } else if (this.type === "themes") {
        return this.themes;
      } else {
        return this.specials;
      }
    },
    greyscales() {
      const { dark, light } = this;
      const colors = [];

      for (let i = 1; i <= 7; i++) {
        colors.push({
          text: `Greyscale / ${i} / Light`,
          value: light[`greyscale_${i}`],
          textColor: i <= 3 ? light.greyscale_7 : light.greyscale_1
        });

        colors.push({
          text: `Greyscale / ${i} / Dark`,
          value: dark[`greyscale_${i}`],
          textColor: i <= 3 ? dark.greyscale_7 : dark.greyscale_1
        });
      }

      return colors;
    },
    themes() {
      const items = ["pink", "blue", "orange", "bright_green", "green"];

      return this.getColors(items);
    },
    specials() {
      const items = ["error", "warning", "success", "info"];

      return this.getColors(items);
    }
  },

  methods: {
    getColors(items) {
      const { dark, light } = this;
      const colors = [];

      for (const item of items) {
        colors.push({
          text: `Theme / ${capitalize(item)} / Light`,
          value: light[item],
          textColor: light.greyscale_7
        });
        colors.push({
          text: `Theme / ${capitalize(item)} / Dark`,
          value: dark[item],
          textColor: light.greyscale_7
        });
      }

      return colors;
    }
  }
};
</script>

<style lang="scss" scoped>
.color-palette {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 736px;
  border-radius: 8px;
  overflow: hidden;

  .color {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 14px;
    height: 112px;
    padding: 32px;

    .value {
      margin-top: 10px;
    }
  }
}
</style>
