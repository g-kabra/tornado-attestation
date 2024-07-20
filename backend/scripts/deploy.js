// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const {ethers} = require("ethers");

async function main() {
  // deploy hasher
  // const Hasher = await hre.ethers.getContractFactory("Hasher");
  // const hasher = await Hasher.deploy();
  // await hasher.deployed();
  // console.log(hasher.address);
  // const hasherAddress = hasher.address;   

  // // deploy verifier
  // const Verifier = await hre.ethers.getContractFactory("Verifier");
  // const verifier = await Verifier.deploy();
  // await verifier.deployed();
  // console.log(verifier.address);
  // const verifierAddress = verifier.address;

  // deploy tornado
  const Tornado = await hre.ethers.getContractFactory("Tornado");
  const hasherAddress = "0x9355B0Ca17846e2c2E8b72a0D9e4178DeBDa163F";
  const verifierAddress = "0x70Ac6448a0977B26D708A703EE98CA11C619e118";
  const indexer = "0xd147a19c3B085Fb9B0c15D2EAAFC6CB086ea849B";
  const schemaUid = '0x2f34a2ffe5f87b2f45fbc7c784896b768d77261e2f24f77341ae43751c765a69';
  const tornado = await Tornado.deploy(hasherAddress, verifierAddress, indexer, schemaUid);
  await tornado.deployed();
  console.log(tornado.address);
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
