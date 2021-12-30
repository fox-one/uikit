<template>
  <div class="grid">
    <div>
      <div class="item">
        <div class="cell">container</div>
        <div class="pr-2 greyscale_1"></div>
        <div class="cell">container</div>
      </div>
      <div class="label">2P 小</div>
    </div>

    <div>
      <div class="item">
        <div class="cell">container</div>
        <div class="pr-4 greyscale_1"></div>
        <div class="cell">container</div>
      </div>
      <div class="label">4P 中</div>
    </div>

    <div>
      <div class="item">
        <div class="cell">container</div>
        <div class="pr-6 greyscale_1"></div>
        <div class="cell">container</div>
      </div>

      <div class="label">6P 大</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 16px;
  row-gap: 16px;

  .item {
    display: flex;
  }

  .cell {
    flex: 1;
    height: 136px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px dashed var(--v-greyscale_1-base);
    border-radius: 8px;
  }

  .label {
    margin-top: 20px;
  }
}
</style>
