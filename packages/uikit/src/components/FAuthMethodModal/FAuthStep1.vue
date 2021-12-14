<template>
  <div class="f-auth-step1">
    <div class="text-center f-auth-methods__title">{{ labels[0] }}</div>

    <div class="text-center greyscale_3--text f-auth-methods__subtitle">
      {{ labels[1] }}
    </div>

    <div class="f-auth-methods">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="f-auth-method"
        @click="handleAuth(item)"
      >
        <span class="mb-3">
          <v-img width="88" height="68" :src="item.logo" />
        </span>

        <span class="f-auth-method__label">{{ item.title }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, PropSync } from "vue-property-decorator";
import { $t } from "../../utils/helper";

@Component({
  name: "FAuthStep1",
  inheritAttrs: false
})
class FAuthStep1 extends Vue {
  @Prop({ type: Boolean, default: false }) fennec;

  @Prop({ type: String, default: "" }) title;

  @PropSync("step") bindStep;

  @PropSync("select") bindSelect;

  get labels() {
    return [
      this.title || $t(this, "connect_wallet"),
      $t(this, "connect_wallet_subtitle")
    ];
  }

  get items() {
    return [
      {
        avaliable: this.fennec,
        value: "fennec",
        title: "Fennec",
        logo: "https://static.fox.one/image/logo_fennec@88x68.png"
      },
      {
        avaliable: true,
        value: "mixin",
        title: "Mixin Messenger",
        logo: "https://static.fox.one/image/logo_mixin@88x68.png"
      }
    ];
  }

  handleAuth(item) {
    if (item.avaliable) {
      this.$emit("auth", item.value);
    } else {
      this.bindSelect = item.value;
      this.bindStep = 2;
    }
  }
}
export default FAuthStep1;
</script>
