<template>
  <f-tooltip v-if="showTooltip" v-model="show" top>
    <template #activator="{ on }">
      <slot v-if="hasHint" name="activator" :on="on">
        <f-hint-activator @click.native="on.click" />
      </slot>
    </template>

    <div class="f-hint-content f-hint-tooltip__content">
      <span v-if="html" v-html="hint" />
      <f-render v-else :nodes="hint" />

      <f-hint-link v-if="href" :href="href" />
    </div>
  </f-tooltip>

  <f-bottom-sheet v-else v-model="show" top wapper-in-desktop="dialog">
    <template #activator="{ on }">
      <f-hint-activator v-if="hasHint" @click.native="on.click" />
    </template>

    <f-bottom-sheet-title>
      {{ text.details }}
    </f-bottom-sheet-title>

    <div>
      <div class="f-hint-content f-hint-dialog__content px-4 py-0">
        <span v-if="html" v-html="hint" />
        <f-render v-else :nodes="hint" />

        <f-hint-link v-if="href" :href="href" />
      </div>

      <div class="text-center my-8">
        <f-button color="primary" @click="handleClose">
          {{ text.close }}
        </f-button>
      </div>
    </div>
  </f-bottom-sheet>
</template>

<script lang="ts">
import "./FHint.scss";

import { Component, Vue, Prop } from "vue-property-decorator";
import FHintActivator from "./FHintActivator.vue";
import FHintLink from "./FHintLink.vue";
import { $t } from "../../utils/helper";

@Component({
  name: "FHint",
  components: {
    FHintActivator,
    FHintLink
  }
})
class FHint extends Vue {
  @Prop({ type: Boolean, default: true }) useDialog!: boolean;

  @Prop({ type: Boolean, default: false }) html!: boolean;

  @Prop() hint!: string;

  @Prop() href!: string;

  show = false;

  get showTooltip() {
    return !this.useDialog || this.$vuetify.breakpoint.mdAndUp;
  }

  get hasHint() {
    return Boolean(this.hint);
  }

  get text() {
    return { details: $t(this, "details"), close: $t(this, "close") };
  }

  handleClose() {
    this.show = false;
  }
}
export default FHint;
</script>
