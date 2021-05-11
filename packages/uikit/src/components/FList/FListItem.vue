<template>
  <v-list-item
    :ripple="false"
    class="f-list-item"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot name="head"></slot>

    <slot name="body">
      <v-list-item-content class="f-list-item__body">
        <div class="f-list-item__title">
          {{ title }}
        </div>
        <div class="f-list-item__subtitle">
          {{ subtitle }}
        </div>
      </v-list-item-content>
    </slot>

    <slot name="tail">
      <v-list-item-action class="f-list-item__tail">
        <span class="f-list-item__value">{{ value }}</span>
        <v-icon>$next</v-icon>
      </v-list-item-action>
    </slot>
  </v-list-item>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import {
  VImg,
  VListItem,
  VListItemAction,
  VListItemContent,
  VIcon
} from "vuetify/lib";

@Component({
  components: {
    VImg,
    VIcon,
    VListItem,
    VListItemAction,
    VListItemContent
  }
})
class FListItem extends Vue {
  @Prop({ type: String, default: "" }) title!: string;

  @Prop({ type: String, default: "" }) subtitle!: string;

  @Prop({ type: String, default: "" }) value!: string;
}
export default FListItem;
</script>

<style lang="scss">
@import "./FListItem.scss";
</style>
