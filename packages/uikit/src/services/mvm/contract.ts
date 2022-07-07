import { ethers } from "ethers";
import { parse } from "uuid";
import { RegistryAddress, BridgeAddress, RpcProvider } from "./constants";
import { AssetABI, RegistryABI, BridgeABI } from "./abis";

export default class ContractOperator {
  signer: ethers.providers.JsonRpcSigner;

  constructor(provider) {
    this.signer = provider.getSigner();
  }

  registryContract = new ethers.Contract(
    RegistryAddress,
    RegistryABI,
    new ethers.providers.JsonRpcProvider(RpcProvider)
  );

  async getAssetContractAddress(assetId: string): Promise<string> {
    return await this.registryContract.contracts(
      "0x" + Buffer.from(parse(assetId) as any).toString("hex")
    );
  }

  async execAssetContract(assetId: string, method: string, args: string[]) {
    const address = await this.getAssetContractAddress(assetId);
    const contract = new ethers.Contract(address, AssetABI, this.signer);

    return contract[method](...args);
  }

  execBridgeContrace(method: string, args: string[]) {
    const contract = new ethers.Contract(BridgeAddress, BridgeABI);

    return contract[method](...args);
  }
}
