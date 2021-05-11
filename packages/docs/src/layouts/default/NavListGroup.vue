<template>
  <div v-if="item.items" class="nav-list-group">
    <nav-list-item :item="item" title />

    <nav-list-item
      v-for="(item2, index2) in item.items"
      :key="index2"
      :item="item2"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import NavListItem from "./NavListItem.vue";

@Component({
  components: {
    NavListItem
  }
})
class NavListGroup extends Vue {
  @Prop() item;

  value = true;
}
export default NavListGroup;
</script>
