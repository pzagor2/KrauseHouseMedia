import { ethers } from "ethers";

import getMaticContract from "@/contracts/getMaticContract";
import Error from "@/types/error";
import TokenError, { TokenErrorType } from "@/types/errors/token-errors";
import Tip from "@/types/tip";

const sendTip = async (tip: Tip): Promise<Error | undefined> => {
  try {
    const contract = getMaticContract(tip.signer);

    const balance = await contract.balanceOf(tip.senderAddress);

    if (balance < 1) {
      return new TokenError(TokenErrorType.INSUFFICIENT_BALANCE);
    } else {
      const res = await contract.transfer(
        tip.recipientAddress,
        ethers.utils.parseEther(tip.amount.toString())
      );
      if (!res) {
        return new TokenError(TokenErrorType.TRANSFER_FAILED);
      }
    }
  } catch (err) {
    return new TokenError(TokenErrorType.TRANSFER_FAILED);
  }
};

export default sendTip;
