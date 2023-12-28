const { assert } = require('chai');
const { network } = require('hardhat');
const { describe, it, beforeEach } = require('mocha');
const { getNamedAccounts, deployments, ethers } = require('hardhat');

if (network.config.chainId === 31337) {
  describe('Exchange', () => {
    let Exchange;
    const setPrice = ethers.parseEther('0.1');
    beforeEach(async () => {
      const { deployer } = await getNamedAccounts();

      await deployments.fixture(['all']);
      Exchange = await ethers.getContractAt('Exchange', deployer);

      console.log(Exchange);
    });

    it('Should store the sellers address, price and trnsaction state', async () => {
      await Exchange.sell('1115588', setPrice);
    });
  });
}
