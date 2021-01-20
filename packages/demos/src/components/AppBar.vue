<template>
  <div>
    <v-row>
      <v-col>
        <f-app-bar v-bind="appbar"></f-app-bar>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <f-app-bar
          v-bind="{ ...appbar, back: false, title: 'No back' }"
        ></f-app-bar>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <f-app-bar
          v-bind="{
            ...appbar,
            back: true,
            align: 'center',
            title: 'centerial title',
          }"
        ></f-app-bar>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <f-app-bar
          v-bind="{
            ...appbar,
            back: true,
            color: 'transparent',
            flat: true,
            title: 'transparent bar',
          }"
        ></f-app-bar>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <f-app-bar
          v-bind="{
            ...appbar,
            back: false,
            flat: true,
            customContent: true,
            mixinImmersive: true,
          }"
        >
          <v-flex class="d-flex align-center">
            <v-avatar size="32">
              <v-img :src="require('@/assets/logo.svg')" :size="32"></v-img>
            </v-avatar>
            <div class="f-title-2 ml-1">Immersive</div>
            <v-spacer />
            <v-btn icon small color="primary">
              <v-icon>{{ icons.mdiFaceProfile }}</v-icon>
            </v-btn>
          </v-flex>
        </f-app-bar>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <f-app-bar
          v-bind="{
            ...appbar,
            back: false,
            flat: true,
            customContent: true,
            mixinImmersive: false,
          }"
        >
          <v-flex class="d-flex align-center">
            <v-avatar size="32">
              <v-img :src="require('@/assets/logo.svg')" :size="32"></v-img>
            </v-avatar>
            <div class="f-title-2 ml-1">UIKit</div>
            <v-spacer />
            <v-btn icon small color="primary">
              <v-icon>{{ icons.mdiFaceProfile }}</v-icon>
            </v-btn>
          </v-flex>
        </f-app-bar>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mdiFaceProfile } from "@mdi/js";

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
  icons = {
    mdiFaceProfile,
  };
}
export default Appbar;
</script>
