import BigNumber from "bignumber.js";
import { ethers } from "ethers";

export function fmtWithdrawAmount(amount: string | number, isXIN = false) {
  const value = isXIN
    ? new BigNumber(amount)
    : new BigNumber(amount).times(1e8);
  const temp = value.decimalPlaces(0, BigNumber.ROUND_DOWN).toString();

  return isXIN ? ethers.utils.parseEther(temp).toString() : temp;
}
