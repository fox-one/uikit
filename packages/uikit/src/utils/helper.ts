export const $t = (vm, key: string) =>
  vm.$vuetify.lang.t("$vuetify.uikit." + key);

export function debounce(fn: any, delay: number) {
  let timeoutId = 0 as any;

  return (...args: any[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}
