import { ethers } from "ethers";

import Error from "@/types/error";
import Tip from "@/types/tip";

const sendTip = async (tip: Tip): Promise<Error | undefined> => {
  const abi = [
    "function balanceOf(address _owner) view returns (uint256 balance)",
    "function transfer(address _to, uint256 _value) returns (bool)",
  ];

  const contractAddress = "0x9F6F91078A5072A8B54695DAfA2374Ab3cCd603b";

  const contract = new ethers.Contract(contractAddress, abi, tip.signer);

  const balance = await contract.balanceOf(tip.senderAddress);
  if (balance < 1) {
    alert("You don't have any KRAUSE to tip!");
    return { message: "Not enough KRAUSE" };
  } else {
    await contract.transfer(
      tip.recipientAddress,
      ethers.utils.parseEther(tip.amount.toString())
    );
  }
};

export default sendTip;
