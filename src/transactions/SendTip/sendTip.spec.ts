import MockSigner from "@/mocks/mockSigner";
import { TokenErrorType } from "@/types/errors/token-errors";
import Tip from "@/types/tip";

import sendTip from "./sendTip";

// mocks
const tip = {
  amount: 1,
  recipientAddress: "0x0",
  senderAddress: "0x0",
  signer: new MockSigner(),
} as Tip;
const mockMaticContract = {
  balanceOf: jest.fn(() => Promise.resolve(1)),
  transfer: jest.fn(() => Promise.resolve(true)),
};

jest.mock("@/contracts/getMaticContract", () => {
  return jest.fn(() => mockMaticContract);
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

    expect(mockMaticContract.transfer).toHaveBeenCalledTimes(1);
    expect(error).toBeUndefined();
  });

  it("given no tokens, should not call contract transfer", async () => {
    givenMaticTokens(0);
    const error = await sendTip(tip);

    expect(mockMaticContract.balanceOf).toHaveBeenCalledTimes(1);
    expect(mockMaticContract.transfer).not.toHaveBeenCalled();
    expect(error?.message).toBe(TokenErrorType.INSUFFICIENT_BALANCE);
  });

  it("given transfer fails, should return error", async () => {
    givenMaticTokens(1);
    givenTransferResult(false);
    const error = await sendTip(tip);

    expect(mockMaticContract.balanceOf).toHaveBeenCalledTimes(1);
    expect(mockMaticContract.transfer).toHaveBeenCalledTimes(1);
    expect(error?.message).toBe(TokenErrorType.TRANSFER_FAILED);
  });
});

// helpers
const givenMaticTokens = (amount: number) => {
  mockMaticContract.balanceOf = jest.fn(() => Promise.resolve(amount));
};

const givenTransferResult = (result: boolean) => {
  mockMaticContract.transfer = jest.fn(() => Promise.resolve(result));
};
