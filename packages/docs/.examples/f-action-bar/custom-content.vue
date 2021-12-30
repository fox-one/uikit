<template>
  <f-action-bar custom-content>
    <v-flex class="d-flex align-center">
      <v-avatar size="32">
        <v-icon>mdi-heart</v-icon>
      </v-avatar>

      <div class="ml-4">
        <div class="f-body-1">$100,000.99</div>
        <div class="f-caption greyscale_3--text">Bal.</div>
      </div>

      <v-spacer />

      <f-button color="primary" small> BUY </f-button>
    </v-flex>
  </f-action-bar>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
