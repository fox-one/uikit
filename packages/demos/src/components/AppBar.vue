<template>
  <div>
    <v-row>
      <v-col>
        <f-app-bar v-bind="appbar"></f-app-bar>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <f-app-bar v-bind="{ ...appbar, back: false }"></f-app-bar>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <f-app-bar
          v-bind="{ ...appbar, back: false, color: 'transparent', flat: true }"
        ></f-app-bar>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class Appbar extends Vue {
  appbar = {
    show: true,
    back: true,
    fixed: false,
    flat: false,
    app: false,
    title: "title",
  };
}
export default Appbar;
</script>
