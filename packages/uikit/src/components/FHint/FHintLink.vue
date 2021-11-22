<template>
  <span class="blue--text f-hint-link" @click="handleClick">
    {{ t(this, "learn_more") }}
    <v-icon size="16" color="blue">$link</v-icon>
  </span>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { VIcon } from "vuetify/lib";
import { $t } from "../../utils/helper";

@Component({
  components: {
    VIcon
  }
})
class FHintLink extends Vue {
  @Prop() href!: string;

  t = $t;

  handleClick() {
    window.open(this.href);
  }
}
export default FHintLink;
</script>
