require("dotenv").config({ path: "../../.env" });
const { ethers } = require("ethers");

const API_KEY_TEST_NETWORK = process.env.API_KEY_TEST_NETWORK;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const provider = new ethers.providers.AlchemyProvider(
  "goerli",
  API_KEY_TEST_NETWORK
);

const main = async () => {
  // Métodos estáticos como <fromMnemonic> <createRandom> não precisam de uma instância da class Wallet
  /** Mnemonic é qualquer técnica de aprendizado que auxilia na retenção ou recuperação de informações
   * na memória humana
   * https://en.wikipedia.org/wiki/Mnemonic
   */

  const mnemonic =
    "announce room limb pattern dry unit scale effort smooth jazz weasel alcohol";

  const wallet = ethers.Wallet.fromMnemonic(mnemonic);
  console.log("wallet: ", wallet.address, wallet.privateKey);

  const myWallet = ethers.Wallet.createRandom();
  console.log("myWallet: ", myWallet.address, myWallet.privateKey);

  const password = "123456";

  const encrypted = await myWallet.encrypt(password);
  console.log("encrypted: ", encrypted);

  const decrypted = await ethers.Wallet.fromEncryptedJson(encrypted, password);
  console.log(decrypted.address, decrypted.privateKey);

  const walletSigner = new ethers.Wallet(PRIVATE_KEY);
  console.log("walletSigner: ", walletSigner.address);

  const signer = walletSigner.connect(provider);
  const balanceSigner = await signer.getBalance();
  console.log("balanceSigner: ", ethers.utils.formatEther(balanceSigner));
};

main();
