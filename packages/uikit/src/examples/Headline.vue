<template>
  <i18n
    :class="`text-${size} font-weight-${weight} text--${color}`"
    :tag="tag"
    v-bind="$attrs"
    v-on="$listeners"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Headline extends Vue {
  @Prop({ type: String, default: "primary" }) color!: string;

  @Prop({ type: String, default: "h6" }) size!: string;

  @Prop({ type: String, default: "div" }) tag!: string;

  @Prop({ type: String, default: "medium" }) weight!: string;
}
</script>
