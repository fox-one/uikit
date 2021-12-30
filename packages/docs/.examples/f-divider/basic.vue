<template>
  <div>
    <f-divider class="my-8" />

    <f-divider class="my-8" opacity="1" />
    
    <f-divider class="my-8" size="8" opacity="1" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
class Divider extends Vue {}
export default Divider
</script>
