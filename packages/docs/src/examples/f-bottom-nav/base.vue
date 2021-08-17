<template>
  <f-app-bottom-nav
    :value="value"
    :items="items"
    color="primary"
    class="mb-10"
    @change="handleChange"
  >
  </f-app-bottom-nav>
</template>
<script>
export default {
  data() {
    return {
      value: "near",
      items: [
        { text: "Recents", icon: "mdi-history", value: "recent" },
        { text: "Favorites", icon: "mdi-heart", value: "favor" },
        { text: "Nearby", icon: "mdi-map-marker", value: "near" }
      ]
    };
  },
  methods: {
    handleChange() {
      console.log("change");
    }
  }
};
</script>
<style lang="scss" scoped></style>
