const { task } = require('hardhat/config');

task('releaseFunds', 'Release funds for a given txtId')
  .addParam('txtid', 'The txtId to release funds for')
  .setAction(async (taskArgs, hre) => {
    const { ethers } = hre;
    const { txtid } = taskArgs;

    console.log(txtid);

    const accounts = await ethers.getSigners();
    const deployer = accounts[0];

    const contract = await ethers.getContractAt(
      'Exchange',
      '0x5FbDB2315678afecb367f032d93F642f64180aa3',
      deployer,
    );

    const transactionResponse = await contract.releaseFund(txtid);
    const transactionReceipt = await transactionResponse;

    console.log('Transaction Receipt:', transactionReceipt);
  });
