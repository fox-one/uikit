<template>
  <div>
    <f-info-grid>
      <f-info-grid-item
        v-for="(item, ix) in items"
        :key="ix"
        :index="ix"
        :title="item.title"
        :value="item.value"
        :value-unit="item.valueUnit"
        :color="item.valueColor"
        :hint="item.hint"
        :reverse="reverse"
      />
    </f-info-grid>

    <div class="mt-4">
      <f-switch v-model="reverse" hide-details label="Reverse"></f-switch>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class InfoGrid extends Vue {
  value = true;

  reverse = true;

  items = [
    {
      title: "ETH Position",
      value: "5.27638999",
      valueUnit: "ETH"
    },
    {
      title: "24h changes",
      value: "+34.41",
      valueUnit: "%",
      valueColor: "green"
    },
    {
      title: "7d changes",
      value: "-1.41",
      valueUnit: "%",
      valueColor: "red"
    },
    {
      title: "Profit Margin (USD)",
      value: "-0.121",
      valueUnit: "%",
      valueColor: "red",
      valueCustomColor: "blue"
    },
    {
      title: "Profit (ETH)",
      value: "+0.00235512",
      valueUnit: "ETH",
      valueColor: "",
      hint: "Some description about profit."
    }
  ];
}
export default InfoGrid;
</script>
