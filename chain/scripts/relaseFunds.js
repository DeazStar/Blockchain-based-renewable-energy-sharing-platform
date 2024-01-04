const { ethers } = require('hardhat');

const releaseFunds = async (txtId) => {
  const accounts = await ethers.getSigners();
  const deployer = accounts[0];

  const contract = await ethers.getContractAt('Exchange', deployer);

  const transactionResponse = await contract.releaseFund(txtId);
  const transactionReceipt = await transactionResponse;

  return transactionReceipt;
};

module.exports = releaseFunds;
