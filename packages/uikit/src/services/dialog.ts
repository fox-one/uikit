import Vue from "vue";
import FDialog from "../components/FDialog";

import type { VueConstructor, VNode } from "vue/types/umd";
import type Vuetify from "vuetify/lib";

export interface Action {
  show?: boolean;
  text?: string;
  props?: Record<string, any>;
  callback?: (...args: any) => void;
}

export interface DialogOptions {
  title?: string | VNode;
  text?: string | VNode;
  props?: Record<string, any>;
  cancel?: Action;
  confirm?: Action;
  actions?: Action[];
  type?: string;
}

const DialogConstructor = Vue.extend(FDialog);

function install(
  Vue: VueConstructor,
  vuetify: (() => Vuetify) | Vuetify,
  globalProps: Record<string, any> = {}
) {
  let instance: any = null;
  const _vuetify = typeof vuetify === "function" ? vuetify() : vuetify;
  const queue: DialogOptions[] = [];

  const create = (options: DialogOptions) => {
    const instance = new DialogConstructor();
    const app = document.querySelector("[data-app]");

    const defaultProps: Record<string, any> = {
      maxWidth: 420,
      ...globalProps
    };

    Object.assign(instance, { ...options, defaultProps });
    instance.$vuetify = _vuetify.framework;
    app?.appendChild(instance.$mount().$el);

    return instance;
  };

  const show = (options: DialogOptions) => {
    if (instance) {
      instance.close();
      queue.unshift(options);

      return;
    }

    instance = create(options);
    instance.show(options);
    instance.$on("close", close);
  };

  const close = () => {
    instance.$nextTick(() => {
      instance.$destroy();
      instance.$el.parentNode.removeChild(instance.$el);
      instance = null;

      if (queue.length) {
        const options = queue.shift();

        options && show(options);
      }
    });
  };

  const shorts = () => {
    const types = ["warning"];
    const methods = {};

    types.forEach((t) => {
      methods[t] = (options: DialogOptions) => show({ type: t, ...options });
    });

    return methods;
  };

  const clear = () => queue.splice(0, queue.length);

  Vue.prototype.$uikit = Vue.prototype.$uikit || {};
  Vue.prototype.$uikit.dialog = {
    show,
    clear,
    ...shorts()
  };
}

function Dialog() {}

Dialog.install = install;

export default Dialog;
