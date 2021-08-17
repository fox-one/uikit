<template>
  <div>
    <f-app-bottom-nav
      :value="value"
      custom-content
      color="primary"
      class="mb-10"
      @change="handleChange"
    >
      <v-btn>
        <span>Recents</span>

        <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-btn>
        <span>Favorites</span>

        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn>
        <span>Nearby</span>

        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
    </f-app-bottom-nav>

    <f-app-bottom-nav
      :value="value"
      custom-content
      color="primary"
      @change="handleChange"
    >
      <v-btn>
        <span>Recents</span>

        <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-btn>
        <span>Favorites</span>

        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn>
        <span>Nearby</span>

        <v-icon>mdi-map-marker</v-icon>
      </v-btn>

      <v-btn>
        <span>Favorites</span>

        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn>
        <span>Nearby</span>

        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
    </f-app-bottom-nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "near"
    };
  },
  methods: {
    handleChange() {
      console.log("change");
    }
  }
};
</script>
<style lang="scss" scoped></style>
