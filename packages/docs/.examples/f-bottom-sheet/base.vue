<template>
  <div>
    <f-bottom-sheet
      v-model="show"
      :persistent="persistent"
      :adaptive="adaptive"
      :wapper-in-desktop="desktopWapper"
      title="选择一个人物"
      content-class="pepole"
    >
      <template #activator="{ on }">
        <f-button color="primary" block v-on="on"> Show selector </f-button>
      </template>
      <f-bottom-sheet-subtitle>
        <f-input v-model="filter" label="search"></f-input>
      </f-bottom-sheet-subtitle>
      <v-list height="400" style="overflow: scroll">
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
      <div class="pa-5 mt-5">
        <v-btn block rounded depressed color="primary" @click="handleClose">
          OK
        </v-btn>
      </div>
    </f-bottom-sheet>

    <v-row>
      <v-col cols="6" class="d-flex justify-center">
        <v-switch v-model="persistent" label="Persistent" />
      </v-col>
      <v-col col="6" class="d-flex justify-center">
        <v-switch v-model="adaptive" label="Adaptive" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6" class="d-flex justify-center">
        <v-select
          v-model="desktopWapper"
          label="Wapper in desktop"
          :items="desktopWappres"
        />
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class BottomSheet extends Vue {
  show = false;

  filter = "";

  persistent = false;

  adaptive = true;

  desktopWapper = "menu";

  desktopWappres = [
    { text: "Menu", value: "menu" },
    { text: "Dialog", value: "dialog" }
  ];

  items = [
    {
      icon: true,
      title: "Jason Oner",
      avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg"
    },
    {
      title: "Travis Howard",
      avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg"
    },
    {
      title: "Ali Connors",
      avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg"
    },
    {
      title: "Cindy Baker",
      avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg"
    },
    {
      icon: true,
      title: "Jason Oner",
      avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg"
    },
    {
      title: "Travis Howard",
      avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg"
    },
    {
      title: "Ali Connors",
      avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg"
    },
    {
      title: "Cindy Baker",
      avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg"
    },
    {
      icon: true,
      title: "Jason Oner",
      avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg"
    },
    {
      title: "Travis Howard",
      avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg"
    },
    {
      title: "Ali Connors",
      avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg"
    },
    {
      title: "Cindy Baker",
      avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg"
    }
  ];

  get filtedItems() {
    return this.items.filter((item) => item.title.includes(this.filter));
  }

  handleClose() {
    this.show = false;
  }
}

export default BottomSheet;
</script>
<style lang="scss" scoped></style>
