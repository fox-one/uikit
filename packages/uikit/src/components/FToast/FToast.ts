import "./FToast.scss";

import { Component, Vue, Watch } from "vue-property-decorator";
import { CreateElement, VNode } from "vue/types/umd";
import { VSnackbar, VDivider, VIcon } from "vuetify/lib";

import type { ToastOptions, ToastProps, ToastAction } from "../../utils/toast";

@Component({
  name: "FToast"
})
class FToast extends Vue {
  snackbar = false;

  message: string | VNode | null = null;

  defaultProps: ToastProps = {};

  options: ToastOptions | null = null;

  props: ToastProps = this.defaultProps;

  action: ToastAction | null = null;

  show(options: ToastOptions) {
    const { message = "", color, props = {} } = options;

    this.options = options;
    this.message = message;
    this.props = { ...this.defaultProps, ...props, color };
    this.snackbar = true;
  }

  close() {
    this.snackbar = false;
    this.message = null;
  }

  get classes() {
    return {
      "f-toast": true,
      "f-toast--action": this.options?.action,
      "f-toast--auto-width": this.options?.autoWidth !== false
    };
  }

  @Watch("snackbar")
  handleChange(value: boolean) {
    if (!value) {
      this.$emit("close");
    }
  }

  genAction() {
    if (!this.action) return null;
    const h = this.$createElement;

    return h(
      "div",
      {
        staticClass: "f-toast__action",
        on: { click: () => this.action?.callback?.() }
      },
      [
        h(VDivider, { props: { vertical: true } }),
        h("span", { staticClass: "f-toast__action-text" }, [this.action.text]),
        h(VIcon, { props: { size: 14 } }, ["$arrowRight"])
      ]
    );
  }

  genMessage() {
    const h = this.$createElement;

    return h("div", { staticClass: "f-toast__message" }, [this.message]);
  }

  render(h: CreateElement): VNode {
    return h(
      VSnackbar,
      {
        class: this.classes,
        props: { value: this.snackbar, ...this.props },
        on: { input: (e) => (this.snackbar = e) },
        scopedSlots: {
          action: () => this.genAction()
        }
      },
      [this.genMessage()]
    );
  }
}

export default FToast;
