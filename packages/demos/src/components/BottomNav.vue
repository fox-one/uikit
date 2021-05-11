<template>
  <v-container>
    <v-bottom-navigation :value="value" color="primary" class="mb-10">
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
    </v-bottom-navigation>

    <f-app-bottom-nav
      :value="value"
      custom-content
      color="primary"
      class="mb-10"
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
      :items="items"
      color="primary"
      class="mb-10"
      @change="handleChange"
    >
    </f-app-bottom-nav>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class BottomNav extends Vue {
  value = "near";

  items = [
    { text: "Recents", icon: "mdi-history", value: "recent" },
    { text: "Favorites", icon: "mdi-heart", value: "favor" },
    { text: "Nearby", icon: "mdi-map-marker", value: "near" }
  ];

  handleChange() {
    console.log("change");
  }
}
export default BottomNav;
</script>
