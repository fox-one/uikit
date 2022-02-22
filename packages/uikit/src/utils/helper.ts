export const $t = (vm, key: string, ...interpolations: string[]) => {
  return vm.$vuetify.lang.t("$vuetify.uikit." + key, interpolations.join(" "));
};

export function getBrowser() {
  const ua = navigator.userAgent.toLowerCase();

  if (ua.indexOf("firefox") > -1) {
    return "firefox";
  }

  if (ua.indexOf("chrome") > -1) {
    return "chrome";
  }

  return "others";
}
