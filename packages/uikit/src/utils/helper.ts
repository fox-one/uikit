export const $t = (vm, key: string) => {
  return vm.$vuetify.lang.t("$vuetify.uikit." + key);
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
