<template>
  <v-container>
    <p class="text-h5 mt-5">Base</p>
    <v-col>
      <f-action-bar color="primary" :fixed="fixed">
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
          <span>Recents</span>

          <v-icon>mdi-history</v-icon>
        </v-btn>
      </f-action-bar>

      <v-checkbox v-model="fixed" label="Fixed"></v-checkbox>
    </v-col>

    <p class="text-h5 mt-5">Overflow</p>
    <v-col>
      <f-action-bar color="primary">
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
          <span>Recents</span>

          <v-icon>mdi-history</v-icon>
        </v-btn>
      </f-action-bar>
    </v-col>

    <p class="text-h5 mt-5">HideOnScroll</p>
    <p class="caption">With scroll taget or document</p>
    <v-col>
      <f-action-bar
        v-model="value"
        :fixed="fixed2"
        hide-on-scroll
        color="primary"
        scroll-target="#target"
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
          <span>Recents</span>

          <v-icon>mdi-history</v-icon>
        </v-btn>
      </f-action-bar>

      <v-checkbox v-model="fixed2" label="Fixed"></v-checkbox>

      <div id="target" class="ma-5" style="height: 200px; overflow: auto">
        <div style="height: 800px">I am scroll target</div>
      </div>
    </v-col>

    <p class="text-h5 mt-5">Custom Content</p>
    <f-action-bar custom-content>
      <v-flex class="d-flex align-center">
        <v-avatar size="32">
          <v-icon>mdi-heart</v-icon>
        </v-avatar>
        <div class="ml-4">
          <div class="f-body-1">$100,000.99</div>
          <div class="f-caption greyscale_3--text">Bal.</div>
        </div>
        <v-spacer />
        <f-button color="primary" small> BUY </f-button>
      </v-flex>
    </f-action-bar>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class Appbar extends Vue {
  value = false;

  fixed = false;

  fixed2 = false;
}
export default Appbar;
</script>
