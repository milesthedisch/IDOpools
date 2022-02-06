const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("My Dapp", function () {
  let myContract;

  // quick fix to let gas reporter fetch data from gas station & coinmarketcap
  before((done) => {
    setTimeout(done, 2000);
  });

  describe("LaunchPadVault", function () {
    let LaunchpadVaultContract;
    let mockLaunchpadToken;

    it("Should deploy", async function () {
      const Vault = await ethers.getContractFactory("LaunchPadVault");

      // LaunchPadVault requires a ERC 20 token so we create a mock
      const MockLaunchpadToken = await ethers.getContractFactory(
        "MockLaunchpadToken"
      );

      mockLaunchpadToken = await MockLaunchpadToken.deploy(
        ethers.BigNumber.from("10000000000000000000")
      );

      LaunchpadVaultContract = await Vault.deploy(mockLaunchpadToken.address);
    });

    it("Should have name", async function () {
      expect(await LaunchpadVaultContract.name()).to.equal("LaunchPadVault");
    });

    it("Investor should be able to stake", async function () {
      const [owner, investor] = await ethers.getSigners();

      // Give investor some launchpad tokens to stake
      await mockLaunchpadToken.transfer(
        investor.address,
        ethers.utils.parseEther("1")
      );

      // approve allowance

      await mockLaunchpadToken
        .connect(investor)
        .approve(LaunchpadVaultContract.address, ethers.utils.parseEther("1"));

      const launchpadVaultContract = await LaunchpadVaultContract.connect(
        investor
      );

      await launchpadVaultContract.stakeTokens(ethers.utils.parseEther("0.9"));
      const stakedBalance = await launchpadVaultContract.stakers(
        investor.address
      );

      expect(stakedBalance[0]).to.equal(ethers.utils.parseEther("0.9"));
    });

    it("Investor should be able to unstake", async function () {});
  });
});
