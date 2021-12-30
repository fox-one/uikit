<template>
  <f-info-grid>
    <f-info-grid-item
      v-for="(item, ix) in VNodeItem"
      :key="ix"
      :index="ix"
      :title="item.title"
      :value="item.value"
      :value-unit="item.valueUnit"
      :color="item.valueColor"
      :hint="item.hint"
      :reverse="true"
    >
    </f-info-grid-item>
  </f-info-grid>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class InfoGrid extends Vue {
  VNodeItem = [
    {
      title: "VNode value👇",
      value: this.$createElement("div", {
        style: {
          color: "red"
        },
        domProps: {
          innerHTML: "I'm VNode value"
        }
      })
    },
    {
      title: this.$createElement("div", {
        style: {
          color: "green"
        },
        domProps: {
          innerHTML: "I'm VNode title"
        }
      }),
      value: "VNode title👆",
      valueColor: "blue"
    },
    {
      title: this.$createElement("div", {
        domProps: {
          innerHTML: "Alert message"
        }
      }),
      value: "Click Me!",
      valueColor: "green"
    }
  ];
}
export default InfoGrid;
</script>
