const { assert, expect } = require('chai');
const { network } = require('hardhat');
const { describe, it, beforeEach } = require('mocha');
const { deployments, ethers } = require('hardhat');

if (network.config.chainId === 31337) {
  describe('Exchange', () => {
    let Exchange;
    const setPrice = ethers.parseEther('0.1');
    let signer;
    beforeEach(async () => {
      const accounts = await ethers.getSigners();
      [signer] = accounts;

      await deployments.fixture(['all']);
      const ExchangeDeployment = await deployments.get('Exchange');

      Exchange = await ethers.getContractAt(
        ExchangeDeployment.abi,
        ExchangeDeployment.address,
        signer,
      );
    });

    it('Should store the sellers address, price and transaction state', async () => {
      await Exchange.sell('1144774', setPrice);

      const response = await Exchange.getStatus('1144774');

      assert.isDefined(response[0]);
      assert.equal('notSold', response[1]);
      assert.equal('0x0000000000000000000000000000000000000000', response[2]);
      assert.equal(setPrice, response[3]);
    });

    it('When buying it should update the buyers address and contract balance should be updated', async () => {
      const accounts = await ethers.getSigners();
      const sellerAddress = accounts[0];
      const buyerAddress = accounts[1];

      const sellerContract = await Exchange.connect(sellerAddress);
      const buyerContract = await Exchange.connect(buyerAddress);

      const beforeContractBalance = await ethers.provider.getBalance(
        Exchange.target,
      );

      await sellerContract.sell('111555', setPrice);

      await buyerContract.buy('111555', { value: setPrice });

      const afterContractBalance = await ethers.provider.getBalance(
        Exchange.target,
      );

      const response = await buyerContract.getStatus('111555');
      assert.equal(ethers.parseEther('0'), beforeContractBalance);
      assert.equal(setPrice, afterContractBalance);
      assert.equal(buyerAddress.address, response[2]);
      assert.equal('pending', response[1]);
      assert.equal(setPrice, response[3]);
    });

    it('should revert with Exchange_NotEnoughFunds if the price and of the item and the buyer transaction is not equal', async () => {
      const accounts = await ethers.getSigners();
      const sellerAddress = accounts[0];
      const buyerAddress = accounts[1];

      const sellerContract = await Exchange.connect(sellerAddress);
      const buyerContract = await Exchange.connect(buyerAddress);

      await sellerContract.sell('14441', setPrice);

      expect(
        buyerContract.buy('14441', { value: ethers.parseEther('0.001') }),
      ).to.be.revertedWith('Exchange_NotEnoughFunds');
    });

    it('should release funds (deduct 10% from it) if the server the deployer requests it', async () => {
      const accounts = await ethers.getSigners();
      const sellerAddress = accounts[0];
      const buyerAddress = accounts[1];

      const sellerContract = await Exchange.connect(sellerAddress);
      const buyerContract = await Exchange.connect(buyerAddress);

      await sellerContract.sell('111555', setPrice);

      await buyerContract.buy('111555', { value: setPrice });

      await Exchange.releaseFund('111555');

      const afterContractBalance = await ethers.provider.getBalance(
        Exchange.target,
      );

      const response = await Exchange.getStatus('111555');

      assert.equal(ethers.parseEther('0.01'), afterContractBalance);
      assert.equal('sold', response[1]);
    });

    it('should revert with Exchange_NotProvider if its called with other party other than the deployer', async () => {
      const accounts = await ethers.getSigners();
      const sellerAddress = accounts[0];
      const buyerAddress = accounts[1];

      const sellerContract = await Exchange.connect(sellerAddress);
      const buyerContract = await Exchange.connect(buyerAddress);

      await sellerContract.sell('111555', setPrice);

      await buyerContract.buy('111555', { value: setPrice });

      expect(buyerContract.releaseFund('111555')).to.be.revertedWith(
        'Exchange_NotProvider',
      );
    });
  });
}
