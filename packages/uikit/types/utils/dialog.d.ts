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
declare function Dialog(): void;
declare namespace Dialog {
  let install: (
    Vue: VueConstructor<import("vue/types/umd")>,
    vuetify: Vuetify
  ) => void;
}
export default Dialog;

export type Keys = "show" | "warning";

export type DialogMethods = Record<Keys, (options?: DialogOptions) => void>;
