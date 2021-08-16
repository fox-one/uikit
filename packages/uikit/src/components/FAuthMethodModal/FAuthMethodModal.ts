import { Component, Vue, Prop, Model } from "vue-property-decorator";
import { CreateElement, VNode } from "vue/types/umd";
import FBottomSheet from "../FBottomSheet";
import FListItem from "../FList/FListItem";
import { VAvatar, VImg } from "vuetify/lib";
import { $t } from "../../utils/helper";

@Component
class FAuthMethodModal extends Vue {
  @Model("change") show!: boolean;

  @Prop({ type: String, default: "Connect Wallet" }) title!: string;

  @Prop({ type: Boolean, default: false }) fennecAvaliable!: boolean;

  @Prop({ type: Boolean, default: false }) useLinks!: boolean;

  get wallets() {
    const fennec = {
      title: "Fennec",
      subtitle: $t(this, "fennec_wallet_subtitle"),
      logo: require("../../assets/images/wallet_fennec.png"),
      cb: () => {
        this.$emit("auth", "fennec");
      }
    };

    if (!this.fennecAvaliable) {
      fennec.title = "Install Fennec";

      fennec.cb = () => {
        window.location.href = "https://github.com/fox-one/fennec";
      };
    }

    let mixin = {
      title: "Mixin Messenger",
      subtitle: $t(this, "mixin_wallet_subtitle"),
      logo: require("../../assets/images/wallet_mm.png"),
      cb: () => {
        this.$emit("auth", "mixin");
      }
    };

    if (this.useLinks) {
      mixin = {
        title: "Links",
        subtitle: $t(this, "links_wallet_subtitle"),
        logo: require("../../assets/images/wallet_links.png"),
        cb: () => {
          this.$emit("auth", "links");
        }
      };
    }

    return [fennec, mixin];
  }

  genWalletItem(wallet: {
    title: string;
    subtitle: string;
    logo: string;
    cb: Function;
  }) {
    const { cb, logo, subtitle, title } = wallet;
    const h = this.$createElement;

    return h(
      FListItem,
      { props: { title, subtitle }, on: { click: () => cb() } },
      [h(VAvatar, { slot: "head" }, [h(VImg, { props: { src: logo } })])]
    );
  }

  render(h: CreateElement): VNode {
    return h(
      FBottomSheet,
      {
        props: {
          value: this.show,
          adaptive: true,
          desktopWapper: "dialog"
        },
        attrs: {
          maxWidth: 600,
          ...this.$attrs
        },
        on: { change: (v) => this.$emit("change", v) }
      },
      [
        h("div", { slot: "title" }, this.title),
        h("div", { staticClass: "wallets" }, [
          this.wallets.map((x) => this.genWalletItem(x))
        ])
      ]
    );
  }
}

export default FAuthMethodModal;
