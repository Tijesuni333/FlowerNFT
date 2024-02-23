import { ethers } from "hardhat";

async function main() {
  const FlowerNFT = await ethers.deployContract("FlowerNFT");

  await FlowerNFT.waitForDeployment();

  console.log(`FlowerNFT deployed to ${FlowerNFT.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

