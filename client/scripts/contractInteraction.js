import { ethers } from "ethers";
import getContract from "./getContract";

export async function sellContractMethod(txtId, price) {
  const priceInEth = ethers.parseEther(price);

  const ExchangeContract = await getContract();

  const transactionResponse = await ExchangeContract.sell(txtId, priceInEth);

  return await transactionResponse;
}

export async function buyContractMethod(txtId, price) {
  const priceInEth = ethers.parseEther(price);

  const ExchangeContract = await getContract();

  const transactionResponse = await ExchangeContract.buy(txtId, {
    value: priceInEth,
  });

  return await transactionResponse;
}
