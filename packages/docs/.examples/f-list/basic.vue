<template>
  <div>
    <f-list-item title="asdf" class="greyscale_5" />

    <f-list-item title="asdf" hide-tail class="greyscale_5 mt-4" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class List extends Vue {}
export default List;
</script>
