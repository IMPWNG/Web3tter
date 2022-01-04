const hre = require("hardhat");


async function main() {

  const Decentradit = await hre.ethers.getContractFactory("Decentradit");
  const decentradit = await Decentradit.deploy();
  await decentradit.deployed();
  console.log("Decentradit", decentradit.address);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });