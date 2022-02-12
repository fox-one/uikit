import MixinClient from "../services/mixin";

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
  if (parameterChecker(vm)) {
    return;
  }

  if (vm.isFiresbox) {
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

          vm.$emit("errorHandler", {
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
        vm.$emit("getAuthInfo", {
          codeId: auth.code_id
        });

        return true;
      }

      if (auth.authorization_code.length > 16) {
        vm.$emit("getAuthInfo", {
          authCode: auth.authorization_code,
          state: vm.state
        });

        return true;
      }

      if (auth.scopes.length === 0) {
        vm.$emit("getAuthInfo", { state: vm.state });

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
    vm.clientId,
    vm.scope,
    vm.codeChallenge
  );
}

function parameterChecker(vm) {
  if (!vm.clientId) {
    vm.$emit("errorHandler", {
      error: "Client Id cannot be empty"
    });

    return true;
  } else if (!vm.scope) {
    vm.$emit("errorHandler", {
      error: "scope Id cannot be empty"
    });

    return true;
  }

  return false;
}
