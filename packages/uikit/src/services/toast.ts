import Vue from "vue";
import FToast from "../components/FToast";

import type { VueConstructor, VNode } from "vue/types/umd";
import type Vuetify from "vuetify/lib";

export interface ToastProps {
  timeout?: number;
  color?: string;
  app?: boolean;
  [k: string]: any;
}

export interface ToastAction {
  text?: string;
  callback?: (...args: any) => void;
}

export interface ToastOptions {
  message: string | VNode;
  autoWidth?: boolean;
  color?: string;
  type?: string;
  isDark?: boolean;
  queueable?: boolean;
  props?: ToastProps;
  action?: ToastAction;
}

const ToastConstructor = Vue.extend(FToast);

function install(
  Vue: VueConstructor,
  vuetify: (() => Vuetify) | Vuetify,
  globalProps: ToastProps = {}
) {
  let instance: any = null;
  const _vuetify = typeof vuetify === "function" ? vuetify() : vuetify;

  const queue: ToastOptions[] = [];

  const create = (options: ToastOptions) => {
    const instance = new ToastConstructor();
    const app = document.querySelector("[data-app]");
    const defaultProps: ToastProps = {
      timeout: 2000,
      top: true,
      app: true,
      color: "greyscale_1",
      ...globalProps
    };

    Object.assign(instance, { ...options, defaultProps });
    instance.$vuetify = _vuetify.framework;
    app?.appendChild(instance.$mount().$el);

    return instance;
  };

  const show = (options: ToastOptions) => {
    if (instance) {
      if (options.queueable) {
        queue.push(options);
      } else {
        instance.close();
        queue.unshift(options);
      }

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
    const types = ["success", "info", "error", "warning"];
    const methods = {};

    types.forEach((type) => {
      methods[type] = (options: ToastOptions) => show({ type, ...options });
    });

    return methods;
  };

  const clear = () => queue.splice(0, queue.length);

  Vue.prototype.$uikit = Vue.prototype.$uikit || {};
  Vue.prototype.$uikit.toast = {
    show,
    clear,
    ...shorts()
  };
}

function Toast() {}

Toast.install = install;

export default Toast;
