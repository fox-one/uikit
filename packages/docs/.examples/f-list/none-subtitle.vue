<template>
  <f-list>
    <f-list-item
      v-for="item in items"
      :key="item.title"
      :title="item.title"
      :subtitle="item.subtitle"
      :value="item.value"
      class="greyscale_5 mb-4"
    >
    </f-list-item>
  </f-list>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class List extends Vue {
  items = [
    {
      title: "I have no description",
      value: "a super long long value"
    },
    {
      title: "I have no description",
      value: "value"
    }
  ];
}
export default List;
</script>
