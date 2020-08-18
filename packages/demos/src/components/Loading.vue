<template>
  <v-row>
    <v-col>
      <f-loading :fullscreen="true" :loading="true">
        <template #text>
          加载中
        </template>
      </f-loading>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class Loading extends Vue {}
export default Loading;
</script>
