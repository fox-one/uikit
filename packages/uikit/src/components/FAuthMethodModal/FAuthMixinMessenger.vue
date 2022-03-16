<template>
  <div class="f-auth-mixin">
    <div class="f-auth-mixin__left">
      <template v-if="qrUrl">
        <f-qr-code class="f-auth-mixin__qr" :text="qrUrl" :size="182" />
        <v-img
          class="f-auth-mixin__img"
          height="32"
          width="32"
          src="https://static.fox.one/image/icon_mixin@32x32.png"
        />
      </template>
      <f-loading v-else :fullscreen="false" class="d-flex" />
    </div>
    <div class="f-auth-mixin__right">
      <div class="f-auth-mixin__title">
        {{ labels[0] }}
      </div>
      <div class="f-auth-mixin__subtitle">
        <span v-html="labels[1]"></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import FQrCode from "../FQrCode";
import FLoading from "../FLoading";
import { $t } from "../../utils/helper";
import authorize from "../../utils/authorize";
import { VIcon, VImg } from "vuetify/lib";

@Component({
  name: "FAuthMixinMessenger",
  components: {
    VIcon,
    VImg,
    FQrCode,
    FLoading
  }
})
class FAuthMixinMessenger extends Vue {
  @Prop({ default: false, type: Boolean }) isFiresbox!: boolean;

  @Prop() scope!: string;

  @Prop() clientId!: string;

  @Prop() codeChallenge!: string;

  qrUrl = "";

  get labels() {
    return [
      $t(this, "scan_to_connect"),
      $t(
        this,
        "mixin_connect_detail",
        "<a class='f-auth-mixin__link' href='https://mixin.one/messenger'>Mixin Messenger",
        "<svg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>" +
          "<path d='M12.2068 1.79276C10.2975 -0.116585 7.2018 -0.116585 5.29246 1.79276L4.64288 2.44234C4.25236 2.83286 4.25236 3.46603 4.64288 3.85655C5.03341 4.24707 5.66657 4.24707 6.0571 3.85655L6.70667 3.20698C7.83497 2.07868 9.6643 2.07868 10.7926 3.20698C11.9209 4.33528 11.9209 6.16461 10.7926 7.29291L10.1425 7.94304C9.75195 8.33357 9.75194 8.96673 10.1425 9.35726C10.533 9.74778 11.1662 9.74778 11.5567 9.35726L12.2068 8.70712C14.1162 6.79778 14.1162 3.70211 12.2068 1.79276Z' fill='#076aff'/>" +
          "<path d='M3.85726 6.05638C4.24779 5.66586 4.24779 5.03269 3.85726 4.64217C3.46674 4.25165 2.83357 4.25165 2.44305 4.64217L1.79236 5.29286C-0.116985 7.2022 -0.116985 10.2979 1.79236 12.2072C3.70171 14.1166 6.79738 14.1166 8.70672 12.2072L9.35713 11.5568C9.74765 11.1663 9.74765 10.5331 9.35713 10.1426C8.9666 9.75207 8.33344 9.75207 7.94291 10.1426L7.29251 10.793C6.16421 11.9213 4.33488 11.9213 3.20658 10.793C2.07828 9.6647 2.07828 7.83537 3.20658 6.70707L3.85726 6.05638Z' fill='#076aff'/>" +
          "<path d='M8.20674 7.2071C8.59727 6.81658 8.59727 6.18341 8.20674 5.79289C7.81622 5.40237 7.18305 5.40237 6.79253 5.79289L5.73187 6.85355C5.34134 7.24408 5.34134 7.87724 5.73187 8.26776C6.12239 8.65829 6.75556 8.65829 7.14608 8.26776L8.20674 7.2071Z' fill='#076aff'/>" +
          "</svg>",
        "</a>"
      )
    ];
  }

  mounted() {
    authorize(
      {
        clientId: this.clientId,
        scope: this.scope,
        codeChallenge: this.codeChallenge
      },
      this.isFiresbox,
      {
        onShowUrl: (url) => (this.qrUrl = url),
        onError: (error) => this.$emit("error", error),
        onSuccess: (code) => {
          this.$emit("close");
          this.$emit("auth", { type: "mixin", code });
        }
      }
    );
  }
}
export default FAuthMixinMessenger;
</script>
