import { ethers } from "ethers";
import { logEvent } from "firebase/analytics";

import analytics from "@/analytics";
import getMaticContract from "@/contracts/getMaticContract";
import Error from "@/types/error";
import TokenError, { TokenErrorType } from "@/types/errors/token-errors";
import Tip from "@/types/tip";

const sendTip = async (tip: Tip): Promise<Error | undefined> => {
  try {
    const contract = getMaticContract(tip.signer);

    const balance = await contract.balanceOf(tip.senderAddress);

    if (balance < tip.amount) {
      return new TokenError(TokenErrorType.INSUFFICIENT_BALANCE);
    } else {
      const res = await tip.signer.sendTransaction({
        to: tip.recipientAddress,
        value: ethers.utils.parseEther(tip.amount.toString()),
      });
      if (!res) {
        return new TokenError(TokenErrorType.TRANSFER_FAILED);
      }
      if (analytics) {
        logEvent(analytics, "tip", { recipient: tip.recipientAddress });
      }
    }
  } catch (err) {
    return new TokenError(TokenErrorType.TRANSFER_FAILED);
  }
};

export default sendTip;
