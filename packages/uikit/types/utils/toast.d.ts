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
  queueable?: boolean;
  props?: ToastProps;
  action?: ToastAction;
}
declare function Toast(): void;
declare namespace Toast {
  let install: (
    Vue: VueConstructor<import("vue/types/umd")>,
    vuetify: Vuetify
  ) => void;
}
export default Toast;

export type Keys = "show" | "success" | "info" | "error" | "warning";

export type ToastMethods = Record<Keys, (options?: ToastOptions) => void>;

declare module "vue/types/vue" {
  interface Vue {
    $uikit: { toast: ToastMethods };
  }
}
