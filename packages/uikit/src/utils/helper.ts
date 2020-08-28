import BigNumber from "bignumber.js";

export function toPrecision(n: string | number, p: number) {
  const c = new BigNumber(n).dp();
  if (c > p) {
    const v = new BigNumber(n).decimalPlaces(p, 1);
    return v !== null ? v.toString() : "";
  } else {
    return n;
  }
}
export const $t = (vm, key: string) =>
  vm.$vuetify.lang.t("$vuetify.uikit." + key);
