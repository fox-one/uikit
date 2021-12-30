<template>
  <div>
    <f-action-bar color="primary" :fixed="fixed">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      fixed: false
    };
  }
};
</script>
