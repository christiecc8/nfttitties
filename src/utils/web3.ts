import { WalletState } from "@web3-onboard/core";
import { ethers, utils } from "ethers";
import { CONFIG } from "../config";

const env = CONFIG.DEV

export const mint = async (callerWallet: WalletState, mapping: Map<number, number>, ) => {
  var tokenIds: number[] = [];
  var tokenQuantity: number[] = [];
  
  var count = 0;
  mapping.forEach((value, key) => {
    tokenIds[count] = key;
    tokenQuantity[count] = value;
    count++
  })

  try {
    const provider = new ethers.providers.Web3Provider(callerWallet.provider);
    const signer = provider.getSigner(callerWallet.accounts[0].address);
    const myContract = new ethers.Contract(
      env.contract.address,
      env.contract.abi,
      signer
    );
    const totalQuantity = tokenQuantity.reduce((prev, curr) => prev + curr, 0)
    const price = await myContract.price(0)
    const totalPrice = ethers.BigNumber.from(price).mul(totalQuantity)

    const result = await myContract.mintBatch(
      utils.getAddress(callerWallet.accounts[0].address),
      tokenIds,
      tokenQuantity,
      "0x0000000000000000000000000000000000000000"
    , { 
      value: totalPrice,
      gasLimit: 3000000
    }
    )
    await result.wait(5);
    console.log(result)
    return Promise.resolve(true)
  } catch (error: any) {
    if (error.message) {
      alert(error.message)
    } else {
      alert("Something went wrong!")
    }
    return Promise.resolve(false)
  }
}