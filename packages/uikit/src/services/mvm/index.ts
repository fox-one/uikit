import type { ProxyUser, WithdrawPayload } from "./types";

import { ethers } from "ethers";
import { MVMChain, MixinAssetID } from "./constants";
import { fmtWithdrawAmount } from "./helper";
import MixinAPI, { encrypts } from "@foxone/mixin-api";
import ContractOperator from "./contract";
import bridge from "./bridge";
import Web3Modal from "web3modal";
import EventEmitter from "events";

const mixin = new MixinAPI();

export default class MVM extends EventEmitter {
  user: ProxyUser | null = null;

  oparetor: ContractOperator | null = null;

  library: ethers.providers.Web3Provider | null = null;

  account = "";

  connected = false;

  async connenct() {
    const modal = new Web3Modal();
    const provider = await modal.connect();
    const library = new ethers.providers.Web3Provider(provider);
    const accounts = await library.listAccounts();

    try {
      await library.provider?.request?.({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: MVMChain.chainId }]
      });
    } catch (error) {
      if (error.code === 4902) {
        await library.provider?.request?.({
          method: "wallet_addEthereumChain",
          params: [MVMChain]
        });
      }
    }

    const account = accounts[0];
    const address = ethers.utils.getAddress(account);
    const user = await bridge.getProxyUser(address);

    this.library = library;
    this.account = address;
    this.user = user;
    this.oparetor = new ContractOperator(library);
    this.connected = true;

    provider.on("accountsChanged", this.disconnect);
    provider.on("chainChanged", this.disconnect);
    provider.on("disconnect", this.disconnect);
  }

  disconnect() {
    this.emit("disconnect");
    this.clear();
  }

  clear() {
    this.account = "";
    this.oparetor = null;
    this.user = null;
    this.connected = false;
  }

  async withdraw(payload: WithdrawPayload) {
    const { action, amount, asset_id } = payload;
    const asset = await mixin.endpoints.getNetworkAsset(asset_id);
    const isXIN = asset.asset_id === MixinAssetID;
    const extra = await bridge.getExtra(action);
    const to = await bridge.getProxyUserContract(this.account);
    const value = fmtWithdrawAmount(amount, isXIN);

    if (isXIN) {
      await this.oparetor?.execBridgeContrace("release", [to, extra, value]);
    } else {
      await this.oparetor?.execAssetContract(asset_id, "transferWithExtra", [
        to,
        value,
        extra
      ]);
    }
  }

  async getBalance(assetId: string) {
    const isXIN = assetId === MixinAssetID;
    let balance = "0";

    if (isXIN) {
      const resp = await this.library?.getBalance(this.account);

      balance = resp?.toString() ?? "0";
      balance = ethers.utils.formatUnits(balance, 18);
    } else {
      balance = await this.oparetor?.execAssetContract(assetId, "balanceOf", [
        this.account
      ]);
      balance = ethers.utils.formatUnits(balance, 8);
    }

    return balance;
  }

  public getAuthToken() {
    return this.signToken({ data: "", method: "GET", url: "/me" });
  }

  private signToken({ data, method, url }) {
    if (!this.user) {
      throw new Error("No proxy user found");
    }

    return encrypts.signAuthenticationToken(
      this.user.key.client_id,
      this.user.key.session_id,
      this.user.key.private_key,
      method,
      url,
      data
    );
  }
}
