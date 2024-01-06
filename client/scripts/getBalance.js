import { ethers } from "ethers";

export default async function getBalance() {
  if (window.ethereum) {
    const provider = new ethers.BrowserProvider(window.ethereum);

    const signer = await provider.getSigner();

    const balance = await provider.getBalance(signer);

    return ethers.formatEther(balance);
  } else {
    throw new Error("No wallet detected. Download MetaMask");
  }
}
