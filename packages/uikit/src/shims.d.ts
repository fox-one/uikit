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

declare module "types" {
  export * from "vuetify/types";
}

declare module "types/services/theme" {
  export * from "vuetify/types/services/theme";
}
