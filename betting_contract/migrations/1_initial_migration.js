// const Migrations = artifacts.require("Migrations");
const Betting = artifacts.require("Betting.sol");

module.exports = function (deployer) {
  // deployer.deploy(Migrations);
  deployer.deploy(Betting);
};
