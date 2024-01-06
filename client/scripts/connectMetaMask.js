import { ethers } from "ethers";

export default async function connectMetaMask() {
  if (window.ethereum) {
    const provider = new ethers.BrowserProvider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
  } else {
    throw new Error("No wallet detected. Download MetaMask");
  }
}
