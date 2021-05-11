<template>
  <div class="grid">
    <div class="item">
      <div class="label">高对比</div>

      <f-divider size="8" class="divider" />
    </div>
    <div class="item">
      <div class="label">中对比</div>

      <f-divider class="divider" />
    </div>
    <div class="item">
      <div class="label">低对比</div>

      <f-divider opacity="0.05" class="divider" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class Gap extends Vue {}
export default Gap;
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 16px;

  .item {
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .label {
      margin-bottom: 40px;
    }

    .divider {
      width: 100%;
    }
  }
}
</style>
