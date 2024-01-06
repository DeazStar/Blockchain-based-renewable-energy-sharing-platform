import { ethers } from "ethers";
import getContract from "./getContract";

export async function sellContractMethod(txtId, price) {
  const priceInEth = ethers.parseEther(price);

  const ExchangeContract = await getContract();

  const transactionResponse = await ExchangeContract.sell(txtId, priceInEth);

  return await transactionResponse;
}
