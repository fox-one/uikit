<template>
  <div>
    <v-row class="mb-0">
      <v-col>
        <f-panel elevation="none">
          <div class="overline">none elevation</div>
          <div class="body-2 text--secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </div>
        </f-panel>
      </v-col>
    </v-row>
    <v-row class="mb-0">
      <v-col>
        <f-panel>
          <div class="overline">low elevation</div>
          <div class="body-2 text--secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </div>
        </f-panel>
      </v-col>
    </v-row>
    <v-row class="mb-0">
      <v-col>
        <f-panel elevation="high">
          <div class="overline">high elevation</div>
          <div class="body-2 text--secondary">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </div>
        </f-panel>
      </v-col>
      <v-col>
        <f-panel elevation="low">
          <div class="overline">low elevation</div>
          <div class="body-2 text--secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </f-panel>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class Panel extends Vue {}
export default Panel;
</script>
