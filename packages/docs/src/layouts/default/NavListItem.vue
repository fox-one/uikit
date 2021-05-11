<template>
  <component :is="tag" :class="classes" :to="item.to">
    <div class="right">{{ item.title.en }}</div>
    <div class="left">{{ item.title.zh }}</div>
  </component>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
class NavListItem extends Vue {
  @Prop() item;

  @Prop({ type: Boolean, default: false }) title;

  get classes() {
    return {
      "nav-list-item": true,
      "nav-list-item__title": this.title
    };
  }

  get tag() {
    return this.title ? "a" : "router-link";
  }
}
export default NavListItem;
</script>

<style lang="scss" scoped>
.nav-list-item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
  padding: 16px;
  font-size: 12px;
  cursor: pointer;
  color: var(--v-greyscale_3-base);
  border-right: 1px solid var(--v-greyscale_6-base);
  text-decoration: underline;
  position: relative;
  transition: 0.2s ease;
  z-index: 1;

  &__title {
    font-size: 14px;
    font-weight: 600;
    pointer-events: none;
    color: var(--v-greyscale_1-base);
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 4px;
    background-color: transparent;
  }

  &:hover {
    &::before {
      transition: 0.2s ease;
      background-color: var(--v-greyscale_6-base);
      z-index: -1;
    }
  }

  .right {
    text-align: right;
  }

  .left {
    text-align: left;
  }
}
</style>

<style lang="scss">
.nav-list-item.router-link-active {
  color: var(--v-greyscale_1-base);
  border-right: 2px solid var(--v-greyscale_3-base);
}
</style>
