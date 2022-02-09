import {
  TransactionRequest,
  TransactionResponse,
} from "@ethersproject/abstract-provider";
import { Signer } from "ethers";
import { Deferrable } from "ethers/lib/utils";

class MockSigner extends Signer {
  connect() {
    return this;
  }

  getAddress() {
    return new Promise<string>(resolve => {
      resolve("0x0");
    });
  }

  signMessage(): Promise<string> {
    return new Promise<string>(resolve => {
      resolve("0x0");
    });
  }

  signTransaction(): Promise<string> {
    return new Promise<string>(resolve => {
      resolve("0x0");
    });
  }

  sendTransaction(
    //eslint-disable-next-line @typescript-eslint/no-unused-vars
    transaction: Deferrable<TransactionRequest>
  ): Promise<TransactionResponse> {
    return new Promise<TransactionResponse>(resolve => {
      resolve({} as unknown as TransactionResponse);
    });
  }
}

export default MockSigner;
