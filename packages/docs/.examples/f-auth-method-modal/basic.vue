<template>
  <f-auth-method-modal fennec title="Connect Wallet" @auth="handleAuth">
    <template #activator="{ on }">
      <v-btn depressed rounded color="primary" v-on="on"> Connect </v-btn>
    </template>
  </f-auth-method-modal>
</template>
<script>
export default {
  data() {
    return {
      show: false
    };
  },
  methods: {
    handleShowAuthModal() {
      this.show = true;
    },

    handleAuth(val) {
      console.log(val);
    }
  }
};
</script>
<style lang="scss" scoped></style>
