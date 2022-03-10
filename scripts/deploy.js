const hre = require("hardhat");


async function main() {

  const W3bter = await hre.ethers.getContractFactory("W3bter");
  const w3bter = await W3bter.deploy();
  await w3bter.deployed();
  console.log("W3bter", decentradit.address);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });