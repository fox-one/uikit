<template>
  <div>
    <v-row>
      <v-col>
        <v-btn rounded block outlined color="primary" @click="handleLoading">
          Loading
        </v-btn>
        <f-loading :fullscreen="true" :loading="loading">
          <template #text>
            加载中
          </template>
        </f-loading>
      </v-col>
    </v-row>
    <v-row>
      <f-loading size="18" width="2" :fullscreen="false" :loading="loading">
        <template #text>
          加载中
        </template>
      </f-loading>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class Loading extends Vue {
  loading = false;

  handleLoading() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }
}
export default Loading;
</script>
