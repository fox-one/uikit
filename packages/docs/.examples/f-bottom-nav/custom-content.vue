<template>
  <div>
    <f-app-bottom-nav :value="value" custom-content color="primary">
      <v-btn value="home">
        <span>Home</span>

        <v-icon>$FIconHomeFill</v-icon>
      </v-btn>

      <v-btn value="pool">
        <span>Pool</span>

        <v-icon>$FIconPoolAFill</v-icon>
      </v-btn>

      <v-btn value="global">
        <span>Global</span>

        <v-icon>$FIconGlobalFill</v-icon>
      </v-btn>
    </f-app-bottom-nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "pool"
    };
  }
};
</script>
