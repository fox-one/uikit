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
      <template #head>
        <v-icon size="24" color="primary">$FIconCrowdFill</v-icon>
      </template>
    </f-list-item>
  </f-list>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class List extends Vue {
  items = [
    {
      title: "I have a icon",
      subtitle: "Description here",
      value: "a super long long value"
    },
    {
      title: "I have a icon",
      value: "value"
    }
  ];
}
export default List;
</script>
