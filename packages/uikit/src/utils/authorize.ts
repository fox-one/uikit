import MixinClient from "../services/mixin";
import { isMixin } from "@foxone/utils/mixin";

export interface AuthParams {
  clientId: string;
  scope: string;
  codeChallenge: string;
}

export interface Callbacks {
  onError?: (...args: any) => void;
  onSuccess?: (...args: any) => void;
  onShowUrl?: (...args: any) => void;
}

export default function authorize(
  params: AuthParams,
  isFiresbox = false,
  callbacks: Callbacks = {}
) {
  const [http, ws] = isFiresbox
    ? ["https://xuexi-api.firesbox.com", "wss://xuexi-blaze.firesbox.com"]
    : ["https://api.mixin.one", "wss://blaze.mixin.one"];
  const client = new MixinClient(http, ws);
  let opened = false;

  const handler = (resp) => {
    const data = resp.data;

    console.log(resp);

    if (resp?.error?.code === 400 || resp?.error?.code === 10002) {
      callbacks.onError?.(resp?.error);

      return true;
    }

    if (!data) return false;

    if (data.authorization_code.length > 16) {
      callbacks.onSuccess?.(data.authorization_code);

      return true;
    }

    if (isMixin()) {
      if (opened) return false;
      window.open("mixin://codes/" + data.code_id);
      opened = true;
    } else {
      callbacks.onShowUrl?.("https://mixin.one/codes/" + data.code_id);
    }

    return false;
  };

  client.connect(handler, params.clientId, params.scope, params.codeChallenge);
}
