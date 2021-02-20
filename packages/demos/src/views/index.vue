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
          >
          </f-list-item>
        </template>
      </f-list>
    </f-panel>
    <f-panel v-if="otherComponents.length" :padding="0" class="py-2 mb-4">
      <div class="f-caption f-greyscale-3 mx-4">Others</div>
      <v-list>
        <template v-for="(item, index) in otherComponents">
          <f-list-item
            :key="index"
            @click="handleViewComponent(item)"
            :title="item.displayName"
          >
          </f-list-item>
        </template>
      </v-list>
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
      coms: [
        "panel",
        "appbar",
        "actionbar",
        "bottomnav",
        "tabs",
        "floataction",
        "list",
      ],
    },
    {
      label: "Form",
      coms: [
        "assetamountinput",
        "assetselect",
        "button",
        "buttonswitch",
        "phoneinput",
        "input",
      ],
    },
    {
      label: "Presentation",
      coms: [
        "bottomsheet",
        "payingmodal",
        "tips",
        "tooltip",
        "toast",
        "buttonswitch",
        "loading",
        "qrcode",
        "formtips",
        "mixinassetlogo",
        "infogrid",
      ],
    },
    {
      label: "Styles",
      coms: ["color", "typography"],
    },
    {
      label: "Overrided",
      coms: ["chip"],
    },
  ];

  get appbar() {
    return {
      title: "Components",
      back: false,
    };
  }

  filterComponents(names: Array<string>) {
    return componentsList.filter((x) => {
      return names.includes(x.displayName.toLowerCase());
    });
  }

  get otherComponents() {
    return componentsList.filter((x) => {
      for (let ix = 0; ix < this.groups.length; ix++) {
        if (this.groups[ix].coms.includes(x.displayName.toLowerCase())) {
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
