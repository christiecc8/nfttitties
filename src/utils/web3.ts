import { WalletState } from "@web3-onboard/core";
import { ethers } from "ethers";

export const mint = (callerWallet: WalletState, mapping: Map<number, number>, ) => {
  var tokenIds: number[] = [];
  var tokenQuantity: number[] = [];
  
  var count = 0;
  mapping.forEach((value, key) => {
    tokenIds[count] = key;
    tokenQuantity[count] = value;
    count++
  })

  const provider = new ethers.providers.Web3Provider(callerWallet.provider);
  const signer = provider.getSigner(callerWallet.accounts[0].address);
}