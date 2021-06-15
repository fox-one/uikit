<template>
  <v-lazy min-height="498">
    <v-sheet :outlined="true" :rounded="true" class="mb-12">
      <v-row no-gutters>
        <v-col cols="12" md="8">
          <v-responsive class="d-flex" height="44">
            <v-slide-group
              v-if="tabs.length"
              active-class="primary--text"
              multiple
              show-arrows="always"
            >
              <v-slide-item
                v-for="(prop, index) in tabs"
                :key="index"
                v-slot="{ active, toggle }"
              >
                <v-btn
                  :input-value="active"
                  depressed
                  height="44"
                  text
                  tile
                  @click="handleTabClick(prop, active, toggle)"
                >
                  {{ prop }}
                </v-btn>
              </v-slide-item>
            </v-slide-group>
          </v-responsive>

          <v-divider />

          <v-theme-provider :dark="dark">
            <v-sheet
              :color="color"
              :class="`overflow-y-auto fill-height d-flex align-center justify-center pa-4`"
              min-height="400"
              max-height="400"
              rounded="t"
            >
              <slot name="demo" :usage-props="usageProps" />
            </v-sheet>
          </v-theme-provider>
        </v-col>

        <v-col cols="12" md="4">
          <div class="d-flex align-center">
            <v-divider vertical />

            <headline class="px-3" path="options" />
            <div class="pa-1 ms-auto">
              <tooltip-btn
                icon="mdi-invert-colors"
                path="invert-example-colors"
                @click="dark = !dark"
              />
            </div>
          </div>

          <v-divider />

          <div class="d-flex">
            <v-divider vertical />

            <v-responsive
              class="overflow-y-auto pa-3"
              height="100%"
              max-height="400"
              min-height="400"
            >
              <v-checkbox
                v-for="(prop, i) in booleans"
                :key="prop"
                v-model="usageProps[prop]"
                :class="i === 0 && 'mt-0'"
                :label="startCase(prop)"
              />

              <v-slider
                v-for="([min, max, step], prop) in sliders"
                :key="prop"
                v-model="usageProps[prop]"
                :label="startCase(prop)"
                :max="max"
                :min="min"
                :step="step || 1"
                class="my-2"
                hide-details
              />

              <v-select
                v-for="(items, prop) in selects"
                :key="prop"
                v-model="usageProps[prop]"
                :items="items"
                :label="startCase(prop)"
                class="my-2"
                clearable
                dense
                filled
                hide-details
              />

              <v-btn-toggle
                v-for="(items, prop) in btnToggles"
                :key="prop"
                class="my-2"
              >
                <v-btn
                  v-for="(item, i) in items"
                  :key="`${prop}${i}`"
                  text
                  @click="() => (usageProps[prop] = item)"
                >
                  {{ item }}
                </v-btn>
              </v-btn-toggle>

              <v-radio-group
                v-for="(items, prop) in radioGroups"
                :key="prop"
                :label="startCase(prop)"
              >
                <v-radio
                  v-for="item in items"
                  :key="item"
                  :label="item"
                  @click="toggleRadioProp(items, item)"
                ></v-radio>
              </v-radio-group>
            </v-responsive>
          </div>
        </v-col>
      </v-row>
    </v-sheet>
  </v-lazy>
</template>

<script lang="ts">
import { Component, Inject, Vue, Prop } from "vue-property-decorator";
import Headline from "./Headline.vue";
import TooltipBtn from "./TooltipBtn.vue";
import startCase from "lodash/startCase";

@Component({
  components: {
    Headline,
    TooltipBtn
  }
})
class Usage extends Vue {
  @Inject("theme") theme;

  @Prop() defaults;

  @Prop() options;

  @Prop({ default: () => [], type: Array }) tabs;

  dark = false;

  tab = null;

  btnToggles = [];

  booleans = [];

  radioGroups = [];

  selects = [];

  sliders = [];

  usageProps = {};

  get color() {
    return this.dark || this.theme.isDark ? undefined : "grey lighten-5";
  }

  created() {
    this.setContents();
  }

  handleTabClick(prop, active, toggle) {
    toggle();
    this.usageProps[prop] = !active;
  }

  setContents() {
    this.usageProps = Object.assign({}, this.defaults);

    for (const [key, value] of Object.entries(this.options)) {
      this[key] = value;
    }
  }

  toggleRadioProp(props, toggled) {
    for (const prop of props) {
      this.usageProps[prop] = false;
    }

    this.usageProps[toggled] = true;
  }

  startCase = startCase;
}
export default Usage;
</script>
