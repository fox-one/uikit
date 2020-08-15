import { VAppBar, VBtn, VIcon, VToolbarTitle } from "vuetify/lib";
import { Component, Vue, Prop } from "vue-property-decorator";
import { VNode, CreateElement } from "vue";
import { mdiArrowLeft } from "@mdi/js";

interface AppbarProps {
  back?: boolean;
  show?: boolean;
  color?: string;
  height?: string;
  dark?: boolean;
  title?: string;
  style?: any;
}

const defaultProps = {
  back: false,
  show: true,
  color: "#FAFAFA",
  style: "",
  height: "48",
  dark: false,
  title: "",
};

@Component
class FAppBar extends Vue {
  @Prop({ type: Object, default: defaultProps }) appbar!: AppbarProps;

  mounted() {
    console.log(this, (this as any).$vuetify);
  }

  handleBack() {
    this.$emit("back");
  }

  genBackBtn() {
    if (!this.appbar.back) {
      return null;
    }

    const h = this.$createElement;
    const data = {
      props: { small: true, icon: true, color: this.appbar.color },
      on: { click: this.handleBack },
    };

    return h(VBtn, data, [h(VIcon, [mdiArrowLeft])]);
  }

  render(h: CreateElement): VNode | null {
    if (!this.appbar.show) return null;

    const data = {
      props: {
        app: true,
        fixed: true,
        flat: true,
        height: this.appbar.height,
        dark: this.appbar.dark,
        color: this.appbar.color,
        style: this.appbar.style,
      },
    };

    return h(VAppBar, data, [
      this.genBackBtn(),
      h(
        VToolbarTitle,
        { staticClass: "pl-2 text-capitalize font-weight-bold" },
        [this.appbar.title],
      ),
    ]);
  }
}

export default FAppBar;
export { FAppBar };
