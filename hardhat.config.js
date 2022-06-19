require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
const fs = require("fs");
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";
require("dotenv").config();
const projectId = "f32aecd12dd443bf824b32c0f58e86cf";


task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: `https://polygon-mainnet.infura.io/v3/${projectId}`,
      accounts: process.env.privateKey,
    },
    mainnet: {
      url: `https://polygon-mainnet.infura.io/v3/${projectId}`,
      accounts: process.env.privateKey,
    },
    goerli: {
      url: process.env.REACT_APP_ALCHEMY_API_URL,
      accounts: [process.env.REACT_APP_PRIVATE_KEY],
    },
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
