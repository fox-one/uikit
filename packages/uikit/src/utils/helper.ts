import MixinClient from "../services/mixin";
import { propsChecker } from "./checker";

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

export function authorize(vm, isMixin: Boolean = false) {
  if (propsChecker(vm)) {
    return;
  }

  if (vm.$attrs["is-firesbox"]) {
    vm.mixinClient = new MixinClient(
      "https://xuexi-api.firesbox.com",
      "wss://xuexi-blaze.firesbox.com"
    );
  } else {
    vm.mixinClient = new MixinClient(
      "https://api.mixin.one",
      "wss://blaze.mixin.one"
    );
  }

  vm.loading = true;

  vm.mixinClient.connect(
    (resp) => {
      if (resp.error) {
        if (resp.error.code === 400 || resp.error.code === 10002) {
          vm.loading = false;

          vm.$emit("error", {
            error: resp.error
          });

          return true;
        }

        return false;
      }

      const auth = resp.data;

      if (!auth) {
        return false;
      }

      if (isMixin) {
        vm.$emit("authed", {
          codeId: auth.code_id
        });

        return true;
      }

      if (auth.authorization_code.length > 16) {
        vm.$emit("authed", {
          authCode: auth.authorization_code
        });

        return true;
      }

      if (auth.scopes.length === 0) {
        return true;
      }

      if (vm.lastCode === auth.code_id) {
        return false;
      }

      vm.lastCode = auth.code_id;
      vm.qrUrl = "https://mixin.one/codes/" + auth.code_id;
      vm.loading = false;

      return false;
    },
    vm.$attrs["client-id"],
    vm.$attrs["scope"],
    vm.$attrs["code-challenge"]
  );
}
