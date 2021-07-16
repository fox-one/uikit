<template>
  <div>
    <v-row>
      <v-col class="d-flex justify-center">
        <v-btn
          depressed
          rounded
          color="primary"
          min-width="400"
          @click="handleShowAuthModal"
        >
          Connect
        </v-btn>
      </v-col>
    </v-row>
    <f-auth-method-modal v-model="show" fennec-avaliable @auth="handleAuth" />
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

  handleAuth(wallet: "fennec" | "mixin" | "links") {
    if (wallet === "fennec") {
      alert("use fennec auth");
    } else {
      alert("use mixin or link auth");
    }
  }
}
export default AuthModal;
</script>
