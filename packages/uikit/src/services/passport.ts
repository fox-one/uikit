import { VueConstructor } from "vue/types/umd";
import type Vuetify from "vuetify/lib";
import type { FAuthMethodModalProps } from "./auth";

import Fennec from "@foxone/fennec-dapp";
import { genPaymentUrl } from "@foxone/utils/mixin";
import MixinAPI from "@foxone/mixin-api";
import Auth from "./auth";
import Payment from "./payment";
import MVM from "./mvm";

export interface PassportOptions {
  origin: string;
  getTokenByCode?: (code: string) => Promise<string>;
}

export interface PassportPayload {
  vuetify: Vuetify;
  options: PassportOptions;
  authModalProps: FAuthMethodModalProps;
}

export interface PaymentPayload {
  // transfer params
  assetId: string;
  amount: string;
  recipient?: string;
  traceId?: string;
  memo?: string;
  // multisig params
  code?: string;
  multisig?: boolean;
  // common params
  info: {
    symbol: string;
    logo: string;
    amount: string;
  };
  checker?: () => Promise<boolean>;
}

export interface AuthData {
  token: string;
  channel: string;
}

export type channel = "fennec" | "mixin" | "mvm";

function install(Vue: VueConstructor, payload: PassportPayload) {
  const { authModalProps, options, vuetify } = payload;
  const fennec = new Fennec();
  const mvm = new MVM();
  const mixin = new MixinAPI();

  let channel = "";
  let token = "";

  if (!Vue.prototype.$uikit.auth) {
    Auth.install(Vue, vuetify, authModalProps);
  }

  if (!Vue.prototype.$uikit.payment) {
    Payment.install(Vue, vuetify);
  }

  mixin.provider.instance.interceptors.request.use((config) => {
    config.headers = { ...config.headers, Authorization: `Bearer ${token}` };

    return config;
  });

  const connectFennec = async () => {
    await fennec.connect(options.origin);
    token = await fennec.ctx!.wallet.signToken({ payload: {} });
  };

  const connectMVM = async () => {
    await mvm.connenct();
    token = mvm.getAuthToken();
  };

  const auth = async () => {
    const { getTokenByCode } = options;

    return new Promise((resolve, reject) => {
      Vue.prototype.$uikit.auth.show({
        checkFennec: () => fennec.isAvailable(),
        handleAuth: async (data) => {
          channel = data.type;

          if (channel === "fennec") {
            await connectFennec();
            resolve({ channel, token });
          }

          if (channel === "mvm") {
            await connectMVM();
            resolve({ channel, token });
          }

          if (channel === "mixin") {
            if (data.token) {
              token = data.token;
            } else {
              if (!getTokenByCode) {
                return reject("No auth actions provided");
              }

              token = await getTokenByCode(data.code);
            }

            resolve({ channel, token });
          }
        },
        handleError(error) {
          reject(error);
        }
      });
    });
  };

  const payment = async (payload: PaymentPayload) => {
    const code = payload.code ?? "";
    const multisig = payload.multisig ?? false;
    const asset_id = payload?.assetId ?? "";
    const opponent_id = payload?.recipient ?? "";
    const amount = payload?.amount ?? "";
    const trace_id = payload?.traceId ?? "";
    const memo = payload?.memo ?? "";
    const scheme = multisig
      ? `mixin://codes/${code}`
      : genPaymentUrl(payload as any);

    const actions = {
      mixin: () => {
        window.location.href === scheme;
      },
      fennec: async () => {
        if (multisig) {
          await fennec.ctx?.wallet.multisigsPayment({ code });
        } else {
          await fennec.ctx?.wallet.transfer({
            asset_id,
            opponent_id,
            amount,
            trace_id,
            memo
          });
        }
      },
      mvm: async () => {
        if (multisig) {
          const resp: any = await mixin.endpoints.codes(code);
          const receivers = resp?.receivers;
          const threshold = resp?.threshold;
          const memo = resp?.memo;

          await mvm.withdraw({
            asset_id,
            amount,
            action: { receivers, threshold, extra: memo }
          });
        } else {
          await mvm.withdraw({
            asset_id,
            amount,
            action: { receivers: [opponent_id], threshold: 1, extra: memo }
          });
        }
      }
    };

    await Vue.prototype.$uikit.payment.show({
      scheme,
      channel,
      actions,
      info: payload.info,
      checker: payload.checker
    });
  };

  const getBalance = async (assetId: string): Promise<string> => {
    if (channel === "mixin") {
      const asset = await mixin.endpoints.getAsset(assetId);

      return asset.balance;
    }

    if (channel === "fennec") {
      console.log("fennec  get asset", fennec);

      const asset = await fennec.ctx?.wallet.getAsset(assetId);

      return asset?.balance ?? "";
    }

    if (channel === "mvm") {
      const balance = await mvm.getBalance(assetId);

      return balance;
    }

    return "0";
  };

  // sync local state with passport once app init
  const sync = async (payload: AuthData) => {
    channel = payload.channel;
    token = payload.token;

    if (channel === "fennec") {
      await connectFennec();
    }

    if (channel === "mvm") {
      await connectMVM();
    }

    return { channel, token };
  };

  Vue.prototype.$uikit = Vue.prototype.$uikit || {};
  Vue.prototype.$uikit.passport = { auth, payment, sync, getBalance };
}

function Passport() {}

Passport.install = install;

export default Passport;
