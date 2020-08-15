<template>
  <f-app-bottom-nav
    :nav="bottomNav"
    :items="bottomNavItems"
    :animation="true"
    active-class="primary-color"
    @change="handleChange"
  ></f-app-bottom-nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mdiWalletOutline, mdiMapSearch, mdiFaceProfile } from "@mdi/js";

@Component
class BottomNav extends Vue {
  bottomNav = "wallet";

  bottomNavItems = [
    {
      text: "Wallet",
      icon: mdiWalletOutline,
      value: "wallet",
    },
    {
      text: "Search",
      icon: mdiMapSearch,
      value: "search",
    },
    {
      text: "Profile",
      icon: mdiFaceProfile,
      value: "profile",
    },
  ];

  handleChange(value) {
    this.bottomNav = value;
  }
}
export default BottomNav;
</script>
