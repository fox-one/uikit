<template>
  <v-container>
    <v-col>
      <f-app-bar back title="Test" class="mb-10" @back="handleBack" />

      <f-app-bar :nav-icon="navIcon" title="Test" class="mb-10" />

      <f-app-bar :title="title" center class="mb-10" />

      <f-app-bar title="Test" class="mb-10"> </f-app-bar>

      <f-app-bar
        dark
        back
        title="Test"
        class="mb-10"
        color="primary"
        @back="handleBack"
      />

      <f-app-bar back center title="Test" class="mb-10">
        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </f-app-bar>

      <f-app-bar
        back
        center
        mixin-immersive
        title="Mixin Immersive"
        class="mb-10"
      >
        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </f-app-bar>

      <f-app-bar class="mb-10">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Page title</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-menu left bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item v-for="n in 5" :key="n" @click="() => {}">
              <v-list-item-title>Option {{ n }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </f-app-bar>

      <v-app-bar class="mb-10">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Page title</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-menu left bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item v-for="n in 5" :key="n" @click="() => {}">
              <v-list-item-title>Option {{ n }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>

      <v-app-bar>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-app-bar-title> Test </v-app-bar-title>
      </v-app-bar>
    </v-col>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { VIcon, VBtn, VChip } from "vuetify/lib";

@Component
class Appbar extends Vue {
  get navIcon() {
    const h = this.$createElement;

    return h(VBtn, { props: { icon: true } }, [h(VIcon, "mdi-account")]);
  }

  get title() {
    const h = this.$createElement;

    return h(VChip, "Test");
  }

  handleBack() {
    console.log("back");
  }
}
export default Appbar;
</script>
