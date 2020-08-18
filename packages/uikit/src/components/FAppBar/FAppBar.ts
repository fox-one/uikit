import { VAppBar, VBtn, VIcon, VToolbarTitle } from "vuetify/lib";
import { Component, Vue, Prop } from "vue-property-decorator";
import { VNode, CreateElement } from "vue";
import { mdiArrowLeft } from "@mdi/js";

@Component
class FAppBar extends Vue {
  @Prop({ type: Boolean, default: true }) show!: boolean;

  @Prop({ type: Boolean, default: false }) back!: boolean;

  @Prop({ type: String, default: "" }) title!: string;

  handleBack() {
    this.$emit("back");
  }

  genBackBtn() {
    if (!this.back) {
      return null;
    }

    const h = this.$createElement;
    const data = {
      props: { small: true, icon: true },
      on: { click: this.handleBack },
    };

    return h(VBtn, data, [h(VIcon, [mdiArrowLeft])]);
  }

  render(h: CreateElement): VNode | null {
    if (!this.show) return null;

    const data = {
      ...this.$attrs,
      props: {
        app: true,
        fixed: true,
        flat: true,
        ...this.$attrs,
      },
    };

    return h(VAppBar, data, [
      this.genBackBtn(),
      h(
        VToolbarTitle,
        { staticClass: "pl-2 text-capitalize font-weight-bold" },
        [this.title],
      ),
    ]);
  }
}

export default FAppBar;
export { FAppBar };
