import "./FDialog.scss";

import { Component, Vue, Watch } from "vue-property-decorator";
import {
  VDialog,
  VCard,
  VCardTitle,
  VCardText,
  VIcon
} from "vuetify/src/components";
import FButton from "../FButton";
import { $t } from "../../utils/helper";

import type { CreateElement } from "vue";
import type { Action, DialogOptions } from "../../utils/dialog";

@Component({
  name: "FDialog",
  components: {
    VDialog,
    VCard,
    VCardTitle,
    VCardText
  }
})
class FDialog extends Vue {
  dialog = false;

  options: DialogOptions | null = null;

  defaultProps: Record<string, any> = {};

  props: Record<string, any> = this.defaultProps;

  show(options: DialogOptions) {
    const { props = {} } = options;

    this.options = options;
    this.props = { ...this.defaultProps, ...props };
    this.dialog = true;
  }

  close() {
    this.dialog = false;
    this.options = null;
  }

  get contentClass() {
    const classes = {
      "f-dialog__content": true,
      "f-dialog--flat": this.props.flat,
      [this.props?.contentClass ?? ""]: true
    };

    return Object.keys(classes)
      .filter((k) => k && classes[k])
      .join(" ");
  }

  @Watch("dialog")
  handleChange(value: boolean) {
    if (!value) {
      this.$emit("close");
    }
  }

  genTitle() {
    const h = this.$createElement;
    let icon: any = null;

    if (this.options?.type === "warning") {
      icon = h(
        VIcon,
        { staticClass: "mr-2", props: { color: "error" } },
        "$warning"
      );
    }

    return h(VCardTitle, [icon, this.options?.title]);
  }

  genText() {
    return this.$createElement(
      VCardText,
      { staticClass: "greyscale_3--text" },
      [this.options?.text]
    );
  }

  genAction(action: Action) {
    const props = { text: true, ...(action.props || {}) };
    const text = action.text;

    if (!action.show) {
      return null;
    }

    return this.$createElement(
      FButton,
      {
        props,
        on: {
          click: () => {
            this.dialog = false;
            action.callback && action.callback();
          }
        }
      },
      text
    );
  }

  genActions() {
    if (this.options?.actions) {
      return this.options.actions.map((action) => this.genAction(action));
    }

    const cancel = {
      show: true,
      text: $t(this, "cancel"),
      props: { color: "greyscale_3" },
      ...(this.options?.cancel || {})
    };

    const defaultConfirmColor =
      this.options?.type === "warning" ? "error" : "greyscale_1";
    const confirm = {
      show: true,
      text: $t(this, "continue"),
      props: { color: defaultConfirmColor },
      ...(this.options?.confirm || {})
    };

    return [this.genAction(cancel), this.genAction(confirm)];
  }

  render(h: CreateElement) {
    return h(
      VDialog,
      {
        props: {
          value: this.dialog,
          ...this.props,
          contentClass: this.contentClass
        },
        on: { input: (e) => (this.dialog = e) }
      },
      [
        h(VCard, { staticClass: "f-dialog__body", props: { flat: true } }, [
          this.genTitle(),
          this.genText(),
          h("div", { staticClass: "f-dialog__actions" }, [this.genActions()])
        ])
      ]
    );
  }
}

export default FDialog;
