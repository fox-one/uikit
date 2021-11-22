<template>
  <v-avatar v-bind="$attrs" v-on="$listeners">
    <v-img v-if="avatar" :src="avatar" />
    <span v-else class="white--text">{{ shortName }}</span>
  </v-avatar>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { VAvatar, VImg } from "vuetify/lib";

@Component({
  components: {
    VAvatar,
    VImg
  }
})
class FUserAvatar extends Vue {
  @Prop() avatar;

  @Prop() name!: string;

  get shortName() {
    return this.name?.[0] ?? "-";
  }
}
export default FUserAvatar;
</script>
