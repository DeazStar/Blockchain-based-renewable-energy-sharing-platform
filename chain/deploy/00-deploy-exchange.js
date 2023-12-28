module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  log('Deploying Contract');
  try {
    await deploy('Exchange', {
      from: deployer,
      args: [],
      log: true,
    });
  } catch (err) {
    console.error(err);
  }

  log('---------------------------');
};

module.exports.tags = ['all', 'Exchange'];
