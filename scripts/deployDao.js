
const hre = require("hardhat");

async function main() {

  // We get the contract to deploy
  const DPDao = await hre.ethers.getContractFactory("DPDao");
  const dPDao = await DPDao.deploy();

  await dPDao.deployed();

  console.log("DPDao deployed to:", dPDao.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
