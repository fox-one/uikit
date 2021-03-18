<template>
  <div class="">
    <f-panel padding="0" class="py-2 mb-4">
      <div class="f-caption f-greyscale-3 mx-4">Window Size = 2</div>
      <f-info-grid :window-size="2">
        <f-info-grid-item
          v-for="(item, ix) in items"
          :key="ix"
          :index="ix"
          :title="item.title"
          :value="item.value"
          :value-unit="item.valueUnit"
          :value-color="item.valueColor"
          :value-custom-color="item.valueCustomColor"
          :hint="item.hint"
        ></f-info-grid-item>
      </f-info-grid>
    </f-panel>
    <f-panel padding="0" class="py-2 mb-4">
      <div class="f-caption f-greyscale-3 mx-4">Window Size = 3</div>
      <f-info-grid :window-size="3">
        <f-info-grid-item
          v-for="(item, ix) in items"
          :key="ix"
          :index="ix"
          :title="item.title"
          :value="item.value"
          :value-unit="item.valueUnit"
          :value-color="item.valueColor"
          :value-custom-color="item.valueCustomColor"
          :hint="item.hint"
        ></f-info-grid-item>
      </f-info-grid>
    </f-panel>
    <f-panel padding="0" class="py-2 mb-4">
      <div class="f-caption f-greyscale-3 mx-4">Reverse title and value</div>
      <f-info-grid :window-size="3">
        <f-info-grid-item
          v-for="(item, ix) in items"
          :key="ix"
          :index="ix"
          :title="item.title"
          :value="item.value"
          :value-unit="item.valueUnit"
          :value-color="item.valueColor"
          :value-custom-color="item.valueCustomColor"
          :hint="item.hint"
          :reverse="true"
        ></f-info-grid-item>
      </f-info-grid>
    </f-panel>
    <f-panel padding="0" class="py-2 mb-4">
      <div class="f-caption f-greyscale-3 mx-4">VNode Item</div>
      <f-info-grid :window-size="2">
        <f-info-grid-item
          v-for="(item, ix) in VNodeItem"
          :key="ix"
          :index="ix"
          :title="item.title"
          :value="item.value"
          :value-unit="item.valueUnit"
          :value-color="item.valueColor"
          :value-custom-color="item.valueCustomColor"
          :hint="item.hint"
          @click="handleClick(ix)"
        >
        </f-info-grid-item>
      </f-info-grid>
    </f-panel>
    <f-panel padding="0" class="py-2 mb-4">
      <div class="f-caption f-greyscale-3 mx-4">Custom Item</div>
      <f-info-grid :window-size="2">
        <f-info-grid-item
          v-for="(item, ix) in customItems"
          :key="ix"
          :index="ix"
        >
          <div>
            <div class="d-flex align-center mb-2">
              <v-icon class="mr-2">{{ item.icon }}</v-icon>
              <div class="f-body-2">{{ item.title }}</div>
            </div>
            <f-switch class="ml-1">{{ item.title }}</f-switch>
          </div>
        </f-info-grid-item>
      </f-info-grid>
    </f-panel>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mdiFaceProfile } from "@mdi/js";
import { CreateElement, VNode } from "vue";
import { VIcon } from "vuetify/lib";

const PriceInfo = Vue.extend({
  props: { price: { type: String, default: "" } },
  render(h: CreateElement): VNode {
    if (!this.price) {
      return h("div", [this.$t("tip.label.price") + "-"]);
    }
    return h("div", { staticClass: "swap-form-tips_price" }, [
      "$5.678",
      this.price &&
        h(VIcon, {
          staticClass: "ml-1",
          props: { size: 18, color: "primary" },
          on: { click: () => this.$emit("switch:price") },
        }),
    ]);
  },
});

@Component({
  components: {
    PriceInfo,
  },
})
class List extends Vue {
  value = true;

  items = [
    {
      title: "ETH Position",
      value: "5.27638999",
      valueUnit: "ETH",
    },
    {
      title: "24h changes",
      value: "+34.41",
      valueUnit: "%",
      valueColor: "green",
    },
    {
      title: "7d changes",
      value: "-1.41",
      valueUnit: "%",
      valueColor: "red",
    },
    {
      title: "Profit Margin (USD)",
      value: "-0.121",
      valueUnit: "%",
      valueColor: "red",
      valueCustomColor: "blue",
    },
    {
      title: "Profit (ETH)",
      value: "+0.00235512",
      valueUnit: "ETH",
      valueColor: "",
      hint: "Some description about profit.",
    },
  ];

  VNodeItem = [
    {
      title: "VNode value👇",
      value: this.$createElement("div", {
        style: {
          color: "red",
        },
        domProps: {
          innerHTML: "I'm VNode value",
        },
      }),
    },
    {
      title: this.$createElement("div", {
        style: {
          color: "green",
        },
        domProps: {
          innerHTML: "I'm VNode title",
        },
      }),
      value: "VNode title👆",
      valueColor: "blue",
    },
    {
      title: this.$createElement("div", {
        domProps: {
          innerHTML: "Alert message",
        },
      }),
      value: "Click Me!",
      valueColor: "green",
    },
  ];

  customItems = [
    {
      icon: mdiFaceProfile,
      title: "A title",
    },
    {
      icon: mdiFaceProfile,
      title: "A title",
    },
  ];

  handleClick(ind) {
    if (ind !== 2) return;
    alert("OMG!");
  }
}
export default List;
</script>
