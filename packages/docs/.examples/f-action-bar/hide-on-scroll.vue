<template>
  <div>
    <f-action-bar
      v-model="value"
      :fixed="fixed"
      hide-on-scroll
      color="primary"
      scroll-target="#target"
    >
      <v-btn>
        <span>Home</span>

        <v-icon>$FIconHomeFill</v-icon>
      </v-btn>

      <v-btn>
        <span>Pool</span>

        <v-icon>$FIconPoolAFill</v-icon>
      </v-btn>

      <v-btn>
        <span>Global</span>

        <v-icon>$FIconGlobalFill</v-icon>
      </v-btn>

      <v-btn>
        <span>Bank</span>

        <v-icon>$FIconBankFill</v-icon>
      </v-btn>
    </f-action-bar>

    <v-checkbox v-model="fixed" label="Fixed"></v-checkbox>

    <div id="target" class="ma-5" style="height: 200px; overflow: auto">
      <div style="height: 800px">I am scroll target</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: false,
      fixed: false
    };
  }
};
</script>
