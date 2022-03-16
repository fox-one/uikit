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
    const isDark = options.isDark ?? this.$vuetify.theme.dark;

    this.options = options;
    this.message = message;
    this.props = {
      ...this.defaultProps,
      ...props,
      color,
      light: !isDark,
      dark: isDark
    };
    this.snackbar = true;
  }

  get icon() {
    const icons = { success: "$check", error: "$alert", warning: "$alert" };

    return icons[this.options?.type ?? ""];
  }

  close() {
    this.snackbar = false;
    this.message = null;
  }

  get classes() {
    const classes = {
      "f-toast": true,
      "f-toast--action": this.options?.action,
      "f-toast--auto-width": this.options?.autoWidth !== false
    };

    if (this.options?.type) {
      classes[`f-toast--${this.options.type}`] = true;
    }

    return classes;
  }

  @Watch("snackbar")
  handleChange(value: boolean) {
    if (!value) {
      this.$emit("close");
    }
  }

  handleActionCallback() {
    this.snackbar = false;
    this.action?.callback?.();
  }

  genAction() {
    if (!this.action) return null;
    const h = this.$createElement;

    return h(
      "div",
      {
        staticClass: "f-toast__action",
        on: { click: () => this.handleActionCallback() }
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

    return h("div", { staticClass: "f-toast__message" }, [
      this.icon &&
        h(VIcon, { staticClass: "mr-4", props: { size: 16 } }, [this.icon]),
      h("span", [this.message])
    ]);
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
