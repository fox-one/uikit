<template>
  <v-fade-transition mode="out-in">
    <v-app>
      <document-appBar />
      <document-view />
    </v-app>
  </v-fade-transition>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DocumentView from "./View.vue";
import DocumentAppBar from "./AppBar.vue";

@Component({
  components: {
    DocumentView,
    DocumentAppBar,
  },
})
class DocumentLayout extends Vue {}
export default DocumentLayout;
</script>
