<template>
  <div>
    <f-panel
      v-for="group in groups"
      :key="group.label"
      :padding="0"
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
          <v-list-item :key="index" @click="handleViewComponent(item)">
            <v-list-item-title>
              {{ item.displayName }}
            </v-list-item-title>
            <v-list-item-action>
              <v-icon>
                {{ mdiChevronRight }}
              </v-icon>
            </v-list-item-action>
          </v-list-item>
        </template>
      </v-list>
    </f-panel>
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";
import { mdiChevronRight } from "@mdi/js";
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
        "toast",
        "buttonswitch",
        "loading",
        "qrcode",
        "formtips",
        "mixinassetlogo",
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
}
export default Page;
</script>
