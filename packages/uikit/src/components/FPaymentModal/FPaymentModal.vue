<template>
  <div class="payment-modal">
    <f-bottom-sheet v-model="dialog" :dark="meta.dark">
      <div
        class="f-payment-modal__content"
        :class="{ 'f-payment-modal__content--mobile': !meta.isDesktop }"
      >
        <div class="f-payment-modal__left">
          <f-qr-code
            v-if="scheme"
            :text="scheme"
            :size="182"
            class="f-payment-modal__qr"
          />
        </div>
        <div class="f-payment-modal__right">
          <template v-if="info">
            <div class="f-payment-modal__logo">
              <v-img :src="info.logo" width="32" height="32" />
            </div>
            <div class="f-payment-modal__amount mt-1">
              <div>{{ labels[0] }}</div>
              <div>{{ info.amount + " " + info.symbol }}</div>
            </div>
          </template>
          <div class="f-payment-modal__hint mt-5" v-html="labels[1]" />
          <div>
            <f-button
              :loading="checking"
              color="primary"
              class="mt-4"
              @click.native="handlePaid"
            >
              !!Paid
            </f-button>
          </div>
        </div>
      </div>
    </f-bottom-sheet>

    <f-paying-modal v-if="!qr" :show="checking" @cancel="cancel" />
  </div>
</template>

<script lang="ts">
import "./FPaymentModal.scss";
import { Component, Vue, Watch } from "vue-property-decorator";
import { isMixin } from "@foxone/utils/mixin";
import { $t } from "../../utils/helper";
import FQrCode from "../FQrCode";
import FPayingModal from "../FPayingModal";
import type { PaymentOptions } from "../../services/payment";

@Component({
  components: {
    FQrCode,
    FPayingModal
  }
})
class FPaymentModal extends Vue {
  scheme = "";

  info: any = null;

  dialog = false;

  checking = false;

  timer: any = null;

  channel = "";

  qr = false;

  reject: any = null;

  get meta() {
    return {
      isDesktop: this.$vuetify.breakpoint.mdAndUp,
      dark: this.$vuetify.theme.dark
    };
  }

  get labels() {
    return [
      $t(this, "scan_to_pay"),
      $t(
        this,
        "mixin_pay_detail",
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

  @Watch("checking")
  @Watch("dialog")
  handleModalChange(value) {
    if (!value) {
      if (this.reject && typeof this.reject === "function") {
        this.reject(new Error("Cannelled"));
      }

      this.timer && clearTimeout(this.timer);
      this.checking = false;
      this.channel = "";
      this.scheme = "";
      this.info = null;
      this.reject = null;
    }
  }

  async show(options: PaymentOptions) {
    const { actions, channel, checker, info, scheme } = options;

    this.info = info;
    this.scheme = scheme;
    this.channel = channel;

    if (channel === "mixin") {
      if (isMixin()) {
        await actions.mixin?.();
        this.checking = true;
      } else {
        this.dialog = true;
        this.qr = true;
      }
    } else if (channel === "fennec") {
      await actions.fennec?.();
      this.checking = true;
    } else if (channel === "mvm") {
      await actions.mvm?.();
      this.checking = true;
    }

    return new Promise((reslove, reject) => {
      this.reject = reject;
      this.polling(reslove, checker);
    });
  }

  async polling(reslove, checker) {
    const completed = await checker();

    if (!completed) {
      this.timer = setTimeout(() => {
        if (this.dialog || this.checking) {
          this.polling(reslove, checker);
        }
      }, 3000);
    } else {
      this.dialog = false;
      this.checking = false;
      reslove();
    }
  }

  cancel() {
    this.checking = false;
  }

  handlePaid() {
    this.checking = true;
  }
}
export default FPaymentModal;
</script>
