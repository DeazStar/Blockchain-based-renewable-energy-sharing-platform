require('@nomicfoundation/hardhat-toolbox');
require('hardhat-deploy');
require('dotenv').config();
require('./scripts/relaseFunds');
require('./scripts/getStatus');

const { SEPOLIA_RPC_URL, SEPOLIA_PRIVATE_KEY } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetowrk: 'hardhat',
  networks: {
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: [SEPOLIA_PRIVATE_KEY],
      chainId: 11155111,
      blockConfirmation: 6,
    },
    localhost: {
      url: 'http://127.0.0.1:8545/',
      chainId: 31337,
    },
  },
  solidity: {
    compilers: [
      {
        version: '0.8.0',
      },
      {
        version: '0.8.8',
      },
    ],
  },
  namedAccounts: {
    deployer: 0,
  },
};
