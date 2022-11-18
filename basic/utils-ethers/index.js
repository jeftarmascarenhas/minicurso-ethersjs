const { ethers } = require("ethers");

/** Os utilitário são usados extensivamente na biblioteca Ethers.js
 * mas também são bastantes úteis para desenvolvedores de aplicativos.
 * https://docs.ethers.io/v5/api/utils/
 */

const main = () => {
  console.log(
    "isAddress: ",
    ethers.utils.isAddress("0x30AE003d9c29Cd9D403F84312744B0f1abcae95c")
  );

  console.log(
    "getAddress: ",
    ethers.utils.getAddress("0x30AE003d9c29Cd9D403F84312744B0f1abcae95c")
  );

  console.log("parseEther: ", ethers.utils.parseEther("1.5").toString());
  console.log(
    "parseUnits: ",
    ethers.utils.parseUnits("1.5", "gwei").toString()
  );
  console.log("formatEther: ", ethers.utils.formatEther("1000").toString());

  const fortyFour = "0x2a";
  console.log(
    "Hex to number: ",
    ethers.BigNumber.from("42").toHexString() === fortyFour
  );
};

main();
