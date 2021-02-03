<template>
  <v-row>
    <v-col>
      <f-bottom-sheet v-model="show" :persistent="persistent">
        <template #activator="{ on }">
          <f-button type="primary" block v-on="on">
            Show selector
          </f-button>
        </template>
        <template #title>
          选择一个人物
        </template>
        <template #subheader>
          <f-input v-model="filter" label="search"></f-input>
        </template>
        <v-list height="400">
          <v-list-item v-for="(item, index) in filtedItems" :key="index">
            <v-list-item-icon>
              <v-icon v-if="item.icon" color="pink">mdi-star</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>

            <v-list-item-avatar>
              <v-img :src="item.avatar"></v-img>
            </v-list-item-avatar>
          </v-list-item>
        </v-list>
      </f-bottom-sheet>
    </v-col>
    <v-col cols="12">
      <v-switch v-model="persistent" label="persistent"> </v-switch>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class BottomSheet extends Vue {
  show = false;

  filter = "";

  persistent = false;

  items = [
    {
      icon: true,
      title: "Jason Oner",
      avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
    },
    {
      title: "Travis Howard",
      avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
    },
    {
      title: "Ali Connors",
      avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
    },
    {
      title: "Cindy Baker",
      avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
    },
    {
      icon: true,
      title: "Jason Oner",
      avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
    },
    {
      title: "Travis Howard",
      avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
    },
    {
      title: "Ali Connors",
      avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
    },
    {
      title: "Cindy Baker",
      avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
    },
    {
      icon: true,
      title: "Jason Oner",
      avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
    },
    {
      title: "Travis Howard",
      avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
    },
    {
      title: "Ali Connors",
      avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
    },
    {
      title: "Cindy Baker",
      avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
    },
  ];

  get filtedItems() {
    console.log(this.filter);
    return this.items.filter((item) => item.title.includes(this.filter));
  }
}
export default BottomSheet;
</script>
