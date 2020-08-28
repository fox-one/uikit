<template>
  <v-row>
    <v-col>
      <v-fab-transition>
        <f-float-action v-show="show">
          <template #icon>
            <v-icon color="#008DDC">{{ icons.mdiFile }}</v-icon>
          </template>
          进行中的订单
        </f-float-action>
      </v-fab-transition>
      <v-fab-transition>
        <f-float-action v-show="show" bottom="200">
          <template #icon>
            <v-icon color="#008DDC">{{ icons.mdiFile }}</v-icon>
          </template>
          进行中的订单
        </f-float-action>
      </v-fab-transition>
      <v-fab-transition>
        <f-float-action v-show="show" bottom="280">
          <template #icon>
            <v-icon color="#008DDC">{{ icons.mdiFile }}</v-icon>
          </template>
          进行中的订单
        </f-float-action>
      </v-fab-transition>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mdiFile } from "@mdi/js";

@Component
class FloatAction extends Vue {
  icons = {
    mdiFile,
  };

  show = true;
}
export default FloatAction;
</script>
