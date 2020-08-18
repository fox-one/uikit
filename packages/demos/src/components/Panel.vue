<template>
  <div>
    <v-row class="my-5">
      <v-col>
        <f-panel elevation="none">
          这是一个段落
          <br />
          这是一个段落
          <br />
          这是一个段落
        </f-panel>
      </v-col>
    </v-row>
    <v-row class="my-5">
      <v-col>
        <f-panel>
          这是一个段落
          <br />
          这是一个段落
          <br />
          这是一个段落
        </f-panel>
      </v-col>
    </v-row>
    <v-row class="my-5">
      <v-col>
        <f-panel elevation="high">
          这是一个段落
          <br />
          这是一个段落
          <br />
          这是一个段落
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
