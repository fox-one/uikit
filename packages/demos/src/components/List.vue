<template>
  <div class="">
    <f-panel padding="0" class="py-2 mb-4">
      <div class="f-caption f-greyscale-3 mx-4">With subtitle</div>
      <f-list>
        <f-list-item
          v-for="item in items1"
          :key="item.title"
          :title="item.title"
          :subtitle="item.subtitle"
          :value="item.value"
          @click="clickItem(item)"
        >
        </f-list-item>
      </f-list>
    </f-panel>
    <f-panel padding="0" class="py-2 mb-4">
      <div class="f-caption f-greyscale-3 mx-4">Without subtitle</div>
      <f-list>
        <f-list-item
          v-for="item in items2"
          :key="item.title"
          :title="item.title"
          :subtitle="item.subtitle"
          :value="item.value"
          @click="clickItem(item)"
        >
        </f-list-item>
      </f-list>
    </f-panel>
    <f-panel padding="0" class="py-2 mb-4">
      <div class="f-caption f-greyscale-3 mx-4">With icon</div>
      <f-list>
        <f-list-item
          v-for="item in items3"
          :key="item.title"
          :title="item.title"
          :subtitle="item.subtitle"
          :value="item.value"
          @click="clickItem(item)"
        >
          <template #head>
            <v-icon size="24" color="primary">{{ mdiFace }}</v-icon>
          </template>
        </f-list-item>
      </f-list>
    </f-panel>
    <f-panel padding="0" class="py-2 mb-4">
      <div class="f-caption f-greyscale-3 mx-4">Customize slots</div>
      <f-list>
        <f-list-item @click="clickItem(item)">
          <template #head>
            <v-icon size="24" color="primary">{{ mdiFace }}</v-icon>
          </template>
          <template #body>
            <v-list-item-content>
              <v-list-item-title>Yo?</v-list-item-title>
            </v-list-item-content>
          </template>
          <template #tail>
            <f-switch v-model="value" />
          </template>
        </f-list-item>
      </f-list>
    </f-panel>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mdiFace } from "@mdi/js";

@Component
class List extends Vue {
  mdiFace = mdiFace;

  value = true;

  items1 = [
    {
      title: "I am a title",
      subtitle: "Description here",
      value: "value"
    },
    {
      title: "I am a title",
      subtitle:
        "Super long long long long long loooooooooooong loooooooooooong loooooooooooong loooooooooooong description here",
      value: ""
    }
  ];
  items2 = [
    {
      title: "I have no description",
      value: "a super long long value"
    },
    {
      title: "I have no description",
      value: "value"
    }
  ];
  items3 = [
    {
      title: "I have a icon",
      subtitle: "Description here",
      value: "a super long long value"
    },
    {
      title: "I have a icon",
      value: "value"
    }
  ];

  clickItem(item) {
    console.log(`click item ${item.title}`);
  }
}
export default List;
</script>
