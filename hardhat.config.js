require("@nomiclabs/hardhat-waffle");
const fs = require('fs');

const privateKey = fs.readFileSync("./privatekey.txt").toString().trim() || "0xfBd5a63F23C7F932E6eB582b6438f4172BeA764b";
const infuraId = fs.readFileSync("./infura.txt").toString().trim() || "332b759cbf344a5f831493f6b1eddcec";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    /*
    mumbai: {
      // Infura
      // url: `https://polygon-mumbai.infura.io/v3/${infuraId}`
      url: "https://rpc-mumbai.matic.today",
      accounts: [privateKey]
    },
    matic: {
      // Infura
      // url: `https://polygon-mainnet.infura.io/v3/${infuraId}`,
      url: "https://rpc-mainnet.maticvigil.com",
      accounts: [privateKey]
    }
    */
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};

