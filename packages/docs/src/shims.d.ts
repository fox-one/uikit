import Vue, { VNode } from "vue";

declare global {
  namespace JSX {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface Element extends VNode {}
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}

declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.svg" {
  const value: string;
  export default value;
}
