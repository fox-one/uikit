<template>
  <f-app-bar>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-toolbar-title>Page title</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-menu left bottom>
      <template #activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>$FIconMoreHorizonBold</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="n in 5" :key="n" @click="() => {}">
          <v-list-item-title>Option {{ n }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </f-app-bar>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
