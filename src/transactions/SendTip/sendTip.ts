import { ethers } from "ethers";

import Error from "@/types/error";
import Tip from "@/types/tip";
import getKrauseContract from "@/contracts/getKrauseContract";
import TokenError, { TokenErrorType } from "@/types/errors/token-errors";

const sendTip = async (tip: Tip): Promise<Error | undefined> => {
  const contract = getKrauseContract(tip.signer);

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
};

export default sendTip;
