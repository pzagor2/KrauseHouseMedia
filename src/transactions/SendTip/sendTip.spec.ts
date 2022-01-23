import sendTip from "./sendTip";
import MockSigner from "@/mocks/mockSigner";
import Tip from "@/types/tip";
import { TokenErrorType } from "@/types/errors/token-errors";

// mocks
const tip = {
  amount: 1,
  recipientAddress: "0x0",
  senderAddress: "0x0",
  signer: new MockSigner(),
} as Tip;
const mockKrauseContract = {
  balanceOf: jest.fn(() => Promise.resolve(1)),
  transfer: jest.fn(() => Promise.resolve(true)),
};

jest.mock("@/contracts/getKrauseContract", () => {
  return jest.fn(() => mockKrauseContract);
});

// cleanup
afterEach(() => {
  jest.clearAllMocks();
});

// tests
describe("sendTip", () => {
  it("should call contract transfer", async () => {
    givenKrauseTokens(1);
    const error = await sendTip(tip);

    expect(mockKrauseContract.transfer).toHaveBeenCalledTimes(1);
    expect(error).toBeUndefined();
  });

  it("given no tokens, should not call contract transfer", async () => {
    givenKrauseTokens(0);
    const error = await sendTip(tip);

    expect(mockKrauseContract.balanceOf).toHaveBeenCalledTimes(1);
    expect(mockKrauseContract.transfer).not.toHaveBeenCalled();
    expect(error?.message).toBe(TokenErrorType.INSUFFICIENT_BALANCE);
  });

  it("given transfer fails, should return error", async () => {
    givenKrauseTokens(1);
    givenTransferResult(false);
    const error = await sendTip(tip);

    expect(mockKrauseContract.balanceOf).toHaveBeenCalledTimes(1);
    expect(mockKrauseContract.transfer).toHaveBeenCalledTimes(1);
    expect(error?.message).toBe(TokenErrorType.TRANSFER_FAILED);
  });
});

// helpers
const givenKrauseTokens = (amount: number) => {
  mockKrauseContract.balanceOf = jest.fn(() => Promise.resolve(amount));
};

const givenTransferResult = (result: boolean) => {
  mockKrauseContract.transfer = jest.fn(() => Promise.resolve(result));
};
