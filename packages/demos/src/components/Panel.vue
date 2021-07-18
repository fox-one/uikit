<template>
  <v-raw>
    <v-col>
      <f-panel>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <br />
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat.
      </f-panel>
    </v-col>

    <v-col>
      <f-panel :elevation="elevation">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <br />
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat.
      </f-panel>
      <v-slider v-model="elevation" min="0" max="24" class="my-3">
        <template #prepend>Elevation</template>
        <template #append>{{ elevation }}</template>
      </v-slider>
      <div></div>
    </v-col>

    <v-col>
      <f-panel padding="32">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <br />
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat.
      </f-panel>
    </v-col>

    <v-col>
      <f-panel tile margin="16">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <br />
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat.
      </f-panel>
    </v-col>

    <v-col>
      <f-panel tile>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <br />
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat.
      </f-panel>
    </v-col>
  </v-raw>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class Panel extends Vue {
  elevation = 2;
}
export default Panel;
</script>
