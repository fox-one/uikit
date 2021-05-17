<template>
  <div>
    <f-panel class="mb-4 text-center">
      <v-avatar size="64">
        <v-img :src="require('@/assets/logo.svg')"></v-img>
      </v-avatar>
      <div class="f-title-1 mb-1">UIKit Demo</div>
      <div class="f-caption f-greyscale-3">
        An UIkit based on Vue & Vuetify, mainly written in TypeScript, includes
        some useful components widely used in bots for Mixin Messenger.
      </div>
      <v-row>
        <v-col cols="12" class="pb-0">
          <v-btn icon @click="gotoGithub">
            <v-icon>{{ mdiGithub }}</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </f-panel>

    <f-panel
      v-for="group in groups"
      :key="group.label"
      padding="0"
      class="py-2 mb-4"
    >
      <div class="f-caption f-greyscale-3 mx-4">{{ group.label }}</div>
      <f-list>
        <template v-for="(item, index) in filterComponents(group.coms)">
          <f-list-item
            :key="index"
            @click="handleViewComponent(item)"
            :title="item.displayName"
            :subtitle="item.subtitle"
          >
          </f-list-item>
        </template>
      </f-list>
    </f-panel>
    <f-panel v-if="otherComponents.length" padding="0" class="py-2 mb-4">
      <div class="f-caption f-greyscale-3 mx-4">Others</div>
      <f-list>
        <template v-for="(item, index) in otherComponents">
          <f-list-item
            :key="index"
            @click="handleViewComponent(item)"
            :title="item.displayName"
            :subtitle="item.subtitle"
          >
          </f-list-item>
        </template>
      </f-list>
    </f-panel>
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";
import { mdiChevronRight, mdiGithub } from "@mdi/js";
import page from "@/mixins/page";

const requireComponent = require.context("../components", true, /\.vue$/);
const componentsList = requireComponent.keys().map((key) => {
  const componentName = upperFirst(
    camelCase(key.replace(/\.\//, "").replace(/\.\w+$/, "")),
  );
  const displayName = key.replace(/^[.]+\//, "").replace(/.vue$/, "");
  return { componentName, displayName };
});

@Component
class Page extends Mixins(page) {
  mdiChevronRight = mdiChevronRight;
  mdiGithub = mdiGithub;

  componentsList = componentsList;

  groups = [
    {
      label: "Layout & Container",
      coms: new Map([
        ["panel", "A versatile container that can be used for anything"],
        ["appbar", "A pivotal to any graphical user interface"],
        ["actionbar", "A container with multiple page-level useful actions"],
        [
          "bottomnav",
          "A better alternative to the sidebar. In most cases we don't need sidebar",
        ],
        [
          "tabs",
          "Hiding content behind a selectable item or pseudo-navigation for a page",
        ],
        ["floataction", ""],
        ["list", "To display items in a collection"],
      ]),
    },
    {
      label: "Form",
      coms: new Map([
        [
          "assetamountinput",
          "Very useful for collecting info about assets and amount",
        ],
        [
          "assetselect",
          "A component for collecting selected asset from asset list",
        ],
        ["button", "Just buttons"],
        ["buttonswitch", "Like checkbox, but better."],
        ["phoneinput", "A component for collecting the phone number."],
        [
          "input",
          "The basic component, used for collecting user provided information",
        ],
      ]),
    },
    {
      label: "Presentation",
      coms: new Map([
        [
          "bottomsheet",
          "A modal view that slides from the bottom of the screen",
        ],
        ["payingmodal", "A modal view that shows the progress of paying"],
        ["authmethodmodal", "A modal view that handle auth method"],
        ["tips", ""],
        ["tooltip", "Conveying information when a user taps an element"],
        ["toast", "To display a quick message to a user"],
        ["loading", "A modal view that shows the progress of loading"],
        ["qrcode", "A component that generates QRCode for any string"],
        ["formtips", ""],
        ["mixinassetlogo", ""],
        ["infogrid", "To display several items in a grid-like view."],
      ]),
    },
    {
      label: "Styles",
      coms: new Map([
        ["color", "colors"],
        ["typography", "text, font, etc"],
      ]),
    },
    {
      label: "Overrided",
      coms: new Map([["chip", "chips from vuetify"]]),
    },
  ];

  get appbar() {
    return {
      title: "Components",
      back: false,
    };
  }

  filterComponents(coms: Map<string, string>) {
    return componentsList
      .filter((x) => {
        return coms.has(x.displayName.toLowerCase());
      })
      .map((x: any) => {
        x.subtitle = coms.get(x.displayName.toLowerCase());
        return x;
      });
  }

  get otherComponents() {
    return componentsList.filter((x) => {
      for (let ix = 0; ix < this.groups.length; ix++) {
        if (this.groups[ix].coms.has(x.displayName.toLowerCase())) {
          return false;
        }
      }
      return true;
    });
  }

  handleViewComponent(item) {
    this.$router.push({
      name: "page-component",
      params: { component: item.componentName },
    });
  }

  gotoGithub() {
    window.location.href = "https://github.com/fox-one/uikit";
  }
}
export default Page;
</script>
