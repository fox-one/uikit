<template>
  <f-search-input clearable placeholder="Search Assets" />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class SearchInput extends Vue {}
export default SearchInput;
</script>
