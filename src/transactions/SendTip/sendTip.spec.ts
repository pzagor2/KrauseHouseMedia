import { TransactionResponse } from "@ethersproject/abstract-provider";
import MockSigner from "@/mocks/mockSigner";
import { TokenErrorType } from "@/types/errors/token-errors";
import Tip from "@/types/tip";

import sendTip from "./sendTip";

// mocks
const signer = new MockSigner();
signer.sendTransaction = jest.fn(() =>
  Promise.resolve({} as unknown as TransactionResponse)
);
const tip = {
  amount: 1,
  recipientAddress: "0x0",
  senderAddress: "0x0",
  signer: signer,
  chainId: 1,
} as Tip;
const mockMaticContract = {
  balanceOf: jest.fn(() => Promise.resolve(1)),
  transfer: jest.fn(() => Promise.resolve(true)),
};
jest.mock("@/contracts/getMaticContract", () => {
  return jest.fn(() => mockMaticContract);
});

const mockWeb3 = {
  chainId: 1,
};
jest.mock("@/hooks/use-web3", () => {
  return jest.fn(() => mockWeb3);
});

// cleanup
afterEach(() => {
  jest.clearAllMocks();
});

// tests
describe("sendTip", () => {
  it("should call contract transfer", async () => {
    givenMaticTokens(1);
    const error = await sendTip(tip);

    expect(tip.signer.sendTransaction).toHaveBeenCalledTimes(1);
    expect(error).toBeUndefined();
  });

  it("given no tokens, should not call contract transfer", async () => {
    givenMaticTokens(0);
    const error = await sendTip(tip);

    expect(mockMaticContract.balanceOf).toHaveBeenCalledTimes(1);
    expect(tip.signer.sendTransaction).not.toHaveBeenCalled();
    expect(error?.message).toBe(TokenErrorType.INSUFFICIENT_BALANCE);
  });

  it("given transfer fails, should return error", async () => {
    givenMaticTokens(1);
    givenTransferResult(false);
    const error = await sendTip(tip);

    expect(mockMaticContract.balanceOf).toHaveBeenCalledTimes(1);
    expect(tip.signer.sendTransaction).toHaveBeenCalledTimes(1);
    expect(error?.message).toBe(TokenErrorType.TRANSFER_FAILED);
  });
});

// helpers
const givenMaticTokens = (amount: number) => {
  mockMaticContract.balanceOf = jest.fn(() => Promise.resolve(amount));
};

const givenTransferResult = (result: boolean) => {
  signer.sendTransaction = jest.fn(() =>
    Promise.resolve(result as unknown as TransactionResponse)
  );
};
