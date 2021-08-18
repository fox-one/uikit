<template>
  <div>
    <f-auth-method-modal title="Connect Wallet" @auth="handleAuth">
      <template #activator="{ on }">
        <v-btn depressed rounded color="primary" v-on="on"> Connect </v-btn>
      </template>
    </f-auth-method-modal>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class AuthModal extends Vue {
  show = false;

  handleShowAuthModal() {
    this.show = true;
  }

  handleAuth(val) {
    console.log(val);
  }
}
export default AuthModal;
</script>
