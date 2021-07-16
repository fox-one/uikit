<template>
  <v-main>
    <v-responsive class="mx-auto overflow-visible" max-width="1024">
      <v-container>
        <v-responsive class="overflow-visible" min-height="90vh">
          <router-view />
        </v-responsive>
      </v-container>
    </v-responsive>
  </v-main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class DocumentView extends Vue {}
export default DocumentView;
</script>
