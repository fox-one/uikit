<template>
  <v-row>
    <v-col>
      <f-bottom-sheet v-model="show">
        <template #activator="{ on }">
          <v-btn color="primary" outlined rounded block v-on="on">
            Show Selector
          </v-btn>
        </template>
        <template #title>
          选择一个人物
        </template>
        <template #subheader>
          <v-text-field
            v-model="filter"
            placeholder="search"
            hide-details
            single-line
          ></v-text-field>
        </template>
        <v-list>
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
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class BottomSheet extends Vue {
  show = false;

  filter = "";

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
    return this.items.filter((item) => item.title.includes(this.filter));
  }
}
export default BottomSheet;
</script>
