const {ethers} = require("hardhat");

async function main() {
  console.log("DEPLOYING...");
  const [ deployer ] = await ethers.getSigners();
  
  const ComRev = await ethers.getContractFactory("ComRev");
  const comrev = await ComRev.deploy();
  await comrev.waitForDeployment();
  
  console.log("MusicShop deployed to:", comrev.target);
  console.log("deployer:", deployer.address);
}

main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});