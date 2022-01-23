import { Signer } from "ethers";

type Tip = {
  signer: Signer;
  senderAddress: string;
  recipientAddress: string;
  amount: number;
};

export default Tip;
