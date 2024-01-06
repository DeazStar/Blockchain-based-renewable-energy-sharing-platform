import { ethers } from "ethers";
import {
  localhostContractAbi,
  localhostContractAddress,
} from "../config/contractDefination";

export default async function getContract() {
  if (window.ethereum) {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const ExchangeContract = new ethers.Contract(
      localhostContractAddress,
      localhostContractAbi,
      signer
    );

    return ExchangeContract;
  } else {
    throw new Error("No wallet detected. Download MetaMask");
  }
}
