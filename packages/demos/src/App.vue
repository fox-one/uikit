<template>
  <v-fade-transition mode="out-in">
    <v-app>
      <v-main>
        <v-responsive class="mx-auto overflow-visible" max-width="1024">
          <v-container>
            <v-responsive class="overflow-visible" min-height="90vh">
              <router-view />
            </v-responsive>
          </v-container>
        </v-responsive>
      </v-main>
    </v-app>
  </v-fade-transition>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",
});
</script>
