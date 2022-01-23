import { Bytes, Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/abstract-provider";
import { Deferrable } from "ethers/lib/utils";

class MockSigner extends Signer {
  connect(provider: Provider) {
    return this;
  }

  getAddress() {
    return new Promise<string>(resolve => {
      resolve("0x0");
    });
  }

  signMessage(message: string | Bytes): Promise<string> {
    return new Promise<string>(resolve => {
      resolve("0x0");
    });
  }

  signTransaction(
    transaction: Deferrable<TransactionRequest>
  ): Promise<string> {
    return new Promise<string>(resolve => {
      resolve("0x0");
    });
  }
}

export default MockSigner;
