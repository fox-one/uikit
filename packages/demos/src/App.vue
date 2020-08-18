<template>
  <document-layout />
</template>

<script lang="ts">
import Vue from "vue";
import DocumentLayout from "./layout/document/Index.vue";

export default Vue.extend({
  name: "App",

  components: {
    DocumentLayout,
  },

  methods: {
    handleBack() {
      this.$router.back();
    },
  },
});
</script>
