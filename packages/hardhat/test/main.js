const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("My Dapp", function () {
  let myContract;

  // quick fix to let gas reporter fetch data from gas station & coinmarketcap
  before((done) => {
    setTimeout(done, 2000);
  });

  // describe("YourContract", function () {
  //   it("Should deploy YourContract", async function () {
  //     const YourContract = await ethers.getContractFactory("YourContract");

  //     myContract = await YourContract.deploy();
  //   });

  //   describe("setPurpose()", function () {
  //     it("Should be able to set a new purpose", async function () {
  //       const newPurpose = "Test Purpose";

  //       await myContract.setPurpose(newPurpose);
  //       expect(await myContract.purpose()).to.equal(newPurpose);
  //     });

  // Uncomment the event and emit lines in YourContract.sol to make this test pass

  /*it("Should emit a SetPurpose event ", async function () {
  const [owner] = await ethers.getSigners();

  const newPurpose = "Another Test Purpose";

  expect(await myContract.setPurpose(newPurpose)).to.
  emit(myContract, "SetPurpose").
  withArgs(owner.address, newPurpose);
  });*/
  // });
  // });

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
    });
  });
});
