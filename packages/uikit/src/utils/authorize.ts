import MixinClient from "../services/mixin/oauth";
import { isMixin } from "@foxone/utils/mixin";
import sha256 from "crypto-js/sha256";
import EncBase64 from "crypto-js/enc-base64";
import Base64 from "@foxone/utils/base64";
import axios from "axios";

export interface AuthParams {
  clientId: string;
  scope: string;
  pkce: boolean;
}

export interface Callbacks {
  onError?: (...args: any) => void;
  onSuccess?: (...args: any) => void;
  onShowUrl?: (...args: any) => void;
}

function base64URLEncode(str) {
  return str.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}

function generateRandomString(length) {
  let text = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
}

function generateCodePair() {
  const randomCode = generateRandomString(32);
  const verifier = base64URLEncode(Base64.encode(randomCode));
  const challenge = base64URLEncode(sha256(randomCode).toString(EncBase64));

  return { verifier, challenge };
}

export default function authorize(
  params: AuthParams,
  isFiresbox = false,
  hosts: string[],
  callbacks: Callbacks = {}
) {
  const [httpDefault, wsDefault] = isFiresbox
    ? ["https://xuexi-api.firesbox.com", "wss://xuexi-blaze.firesbox.com"]
    : ["https://api.mixin.one", "wss://blaze.mixin.one"];
  const http = hosts[0] || httpDefault;
  const ws = hosts[1] || wsDefault;
  const client = new MixinClient(http, ws);

  let opened = false;
  const { challenge = "", verifier = "" } = params.pkce
    ? generateCodePair()
    : {};

  // websocket message handler, return true to end loop
  const handler = (resp): boolean => {
    const data = resp.data;

    // handle error
    if (resp?.error?.code === 400 || resp?.error?.code === 10002) {
      callbacks.onError?.(resp?.error);

      return true;
    }

    // wait for next message
    if (!data) return false;

    // give code or token on success handler
    if (data.authorization_code.length > 16) {
      if (params.pkce) {
        axios
          .post(
            "/oauth/token",
            {
              client_id: params.clientId,
              code_verifier: verifier,
              code: data.authorization_code
            },
            { baseURL: http }
          )
          .then((data) => {
            const token = data?.data?.data?.access_token;

            if (token) {
              callbacks.onSuccess?.(token);
            } else {
              callbacks.onError?.({
                description: "Get PKCE access token error"
              });
            }
          })
          .catch(() => {
            callbacks.onError?.({ description: "Get PKCE access token error" });
          });
      } else {
        callbacks.onSuccess?.(data.authorization_code);
      }

      return true;
    }

    // open oauth modal or show qrcode
    if (isMixin()) {
      if (opened) return false;

      window.location.replace("mixin://codes/" + data.code_id);
      opened = true;
    } else {
      callbacks.onShowUrl?.("https://mixin.one/codes/" + data.code_id);
    }

    return false;
  };

  client.connect(handler, params.clientId, params.scope, challenge);

  return client;
}
