import { Signer } from "ethers";

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
}

export default MockSigner;
