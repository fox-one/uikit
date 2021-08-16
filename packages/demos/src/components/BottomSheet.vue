<template>
  <v-container>
    <v-row>
      <v-col cols="12">
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
          <f-bottom-sheet-sub-title>
            <f-input v-model="filter" label="search"></f-input>
          </f-bottom-sheet-sub-title>
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
          <div class="px-5 mt-5">
            <v-btn block rounded depressed color="primary" @click="handleClose">
              OK
            </v-btn>
          </div>
        </f-bottom-sheet>
      </v-col>
    </v-row>
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
    <br />
    <br />
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
/* import types */
import type { CreateElement, VNode } from "vue";

@Component
class ScopedBottomSheet extends Vue {
  @Prop() filter;
  @Prop() search;

  render(h: CreateElement): VNode {
    return h("f-bottom-sheet", {
      scopedSlots: {
        activator: ({ on }) => {
          return h(
            "f-button",
            {
              props: {
                type: "subtitle",
                block: true
              },
              on
            },
            "Show with Scoped Slot"
          );
        },
        title: () => {
          return "选择一个人物";
        },
        subheader: () => {
          return h("f-input", {
            props: {
              value: this.filter,
              label: this.search
            }
          });
        }
      }
    });
  }
}

@Component({
  components: {
    ScopedBottomSheet
  }
})
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

<style lang="scss"></style>
