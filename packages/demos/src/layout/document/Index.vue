<template>
  <v-fade-transition mode="out-in">
    <v-app>
      <document-appBar />
      <document-view />
      <f-toast
        v-bind="toast"
        :top="60"
        :timeout="2000"
        @change="(val) => setToast({ show: val })"
      />
    </v-app>
  </v-fade-transition>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DocumentView from "./View.vue";
import DocumentAppBar from "./AppBar.vue";
import { State, Mutation } from "vuex-class";

@Component({
  components: {
    DocumentView,
    DocumentAppBar,
  },
})
class DocumentLayout extends Vue {
  @State((state) => state.app.toast) toast;

  @Mutation("app/SET_TOAST") setToast;
}
export default DocumentLayout;
</script>
