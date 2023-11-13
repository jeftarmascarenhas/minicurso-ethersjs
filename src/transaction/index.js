require("dotenv").config({ path: "../../.env" });
const { ethers } = require("ethers");

const API_KEY_TEST_NETWORK = process.env.API_KEY_TEST_NETWORK;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const provider = new ethers.providers.AlchemyProvider(
  "goerli",
  API_KEY_TEST_NETWORK
);

const main = async () => {
  const wallet = new ethers.Wallet(PRIVATE_KEY);
  const signer = wallet.connect(provider);
  const signerAddress = await signer.getAddress();
  const gasPrice = await signer.getGasPrice();
  // Hexlify convert string, objets e arrays em uma string hexadecimal
  const gasLimit = ethers.utils.hexlify(21000);
  const nonce = await signer.getTransactionCount();
  const value = ethers.utils.parseEther("0.00001");

  const toAddress = "0x189c444645c64E9402F12C75debBfcEc9502c046";

  const tx = {
    from: signerAddress,
    to: toAddress,
    gasPrice,
    gasLimit,
    nonce,
    value,
  };

  const pendingTx = await signer.sendTransaction(tx);
  console.log("pendingTx: ", pendingTx);
  const finishedTx = await pendingTx.wait();
  console.log("finishedTx: ", finishedTx);
};

main();
