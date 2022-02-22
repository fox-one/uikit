import MixinClient from "../services/mixin";

export function checkParams(vm) {
  let error: String = "";

  const props = ["client-id", "scope"];

  for (const prop of props) {
    if (!vm.$attrs[prop] || !vm.$attrs[prop].trim()) {
      error = `Parameter ${prop} cannot be empty.`;
      break;
    }
  }

  if (error) {
    vm.$emit("error", { error });

    return true;
  }

  return false;
}

export default function authorize(vm, isMixin: Boolean = false) {
  if (checkParams(vm)) {
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
