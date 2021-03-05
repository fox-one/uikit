<template>
  <div>
    <v-row>
      <v-col>
        <f-action-bar :actions="btns.slice(0, 3)"></f-action-bar>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <f-action-bar
          fixed
          :actions="btns.slice(0, 3)"
          :custom-content="useCustomContent"
        >
          <v-flex class="d-flex align-center">
            <v-avatar size="32">
              <v-img :src="require('@/assets/logo.svg')" :size="32"></v-img>
            </v-avatar>
            <div class="ml-4">
              <div class="f-body-1">$100,000.99</div>
              <div class="f-caption greyscale_3--text">Bal.</div>
            </div>
            <v-spacer />
            <f-button type="primary">
              BUY
            </f-button>
          </v-flex>
        </f-action-bar>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <f-action-bar :actions="btns.slice(0, 4)"></f-action-bar>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div class="f-caption greyscale_3--text mb-2">Custom Content</div>
        <f-switch v-model="useCustomContent"></f-switch>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mdiArrowDown } from "@mdi/js";

@Component
class Appbar extends Vue {
  useCustomContent = true;

  btns = [
    {
      text: "SEND",
      icon: mdiArrowDown,
      size: "26",
      color: "#F50000",
    },
    {
      text: "RECEIVE",
      icon: mdiArrowDown,
      size: "26",
      color: "#009621",
    },
    {
      text: "Exchange",
      icon: mdiArrowDown,
      size: "26",
    },
    {
      text: "SELL",
      icon: mdiArrowDown,
      size: "26",
    },
    {
      text: "SELL",
      icon: mdiArrowDown,
      size: "26",
    },
  ];
}
export default Appbar;
</script>
