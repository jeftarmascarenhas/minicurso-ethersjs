require("dotenv").config({ path: "../../.env" });
const { ethers } = require("ethers");

/**NETWORKS
 * homestead(mainnet),
 * goerli,
 * sepolia,
 * matic.
 * maticmum,
 * arbitrum,
 * arbitrum-goerli,
 * optimism and optimism-goerli.
 *
 */

const API_KEY_MAIN_NETWORK = process.env.API_KEY_MAIN_NETWORK;

const provider = new ethers.providers.AlchemyProvider(
  "homestead",
  API_KEY_MAIN_NETWORK
);

const main = async () => {
  const network = await provider.getNetwork();
  console.log("network: ", network);

  const blockNumber = await provider.getBlockNumber();
  console.log("blockNumber: ", blockNumber);

  const balance = await provider.getBalance(
    "0x643aA0A61eADCC9Cc202D1915D942d35D005400C"
  );
  console.log("balance: ", ethers.utils.formatEther(balance));

  const ensBalance = await provider.getBalance("ethers.eth");
  console.log("ensBalance: ", ethers.utils.formatEther(ensBalance));
};

main();
