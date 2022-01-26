import { toast } from "react-toastify";

import Error from "@/types/error";
import TokenError, { TokenErrorType } from "@/types/errors/token-errors";

import handleTransaction, { TransactionMessages } from "./handleTransaction";

/* eslint-disable  @typescript-eslint/no-unused-vars */
/* eslint-disable  @typescript-eslint/no-explicit-any */

let tx = jest.fn(
  (input: any): Promise<Error | undefined> =>
    new Promise(resolve => resolve(undefined))
);
const input = {};
let messages = {} as TransactionMessages;
jest.mock("react-toastify");

describe("handleTransaction", () => {
  it("should display default sucess message", async () => {
    givenSucceedingTransaction();
    await whenHandlingTransaction();
    assertSuccessNotification("Transaction successful!");
  });

  it("should display custom sucess message", async () => {
    messages = { success: "Apricots!" };
    givenSucceedingTransaction();
    await whenHandlingTransaction();
    assertSuccessNotification("Apricots!");
  });

  it("should display default loading message", async () => {
    givenSucceedingTransaction();
    await whenHandlingTransaction();
    assertLoading("Pending...");
  });

  it("should display custom loading message", async () => {
    messages = { success: "Diamonds?" };
    givenSucceedingTransaction();
    await whenHandlingTransaction();
    assertSuccessNotification("Diamonds?");
  });

  it("should display default error message", async () => {
    givenFailingTransaction(TokenErrorType.INSUFFICIENT_BALANCE);
    await whenHandlingTransaction();
    assertErrorNotification(TokenErrorType.INSUFFICIENT_BALANCE);
  });

  it("should display custom error message", async () => {
    messages = { error: "camel" };
    givenFailingTransaction(TokenErrorType.INSUFFICIENT_BALANCE);
    await whenHandlingTransaction();
    assertErrorNotification("camel");
  });

  it("should display error message when thrown", async () => {
    givenThrowingTransaction();
    await whenHandlingTransaction();
    assertErrorNotification("An unexpected error occurred.");
  });
});

const givenSucceedingTransaction = () => {
  tx = jest.fn(
    (input: any): Promise<Error | undefined> =>
      new Promise(resolve => resolve(undefined))
  );
};

const givenFailingTransaction = (error: TokenErrorType) => {
  tx = jest.fn(
    (input: any): Promise<Error | undefined> =>
      new Promise(resolve =>
        resolve(new TokenError(TokenErrorType.INSUFFICIENT_BALANCE))
      )
  );
};

const givenThrowingTransaction = () => {
  tx = jest.fn(
    (input: any): Promise<Error | undefined> =>
      new Promise(resolve => {
        console.log("THROW");
        throw "Error: An unexpected error occurred.";
      })
  );
};

const whenHandlingTransaction = async () => {
  await handleTransaction(tx, input, messages);
};

const assertLoading = (message: string) => {
  expect(toast.loading).toHaveBeenCalledWith(message);
};

const assertSuccessNotification = (message: string) => {
  const loading = toast.loading("Pending"); // will be undefined :)
  expect(toast.update).toHaveBeenLastCalledWith(loading, {
    render: message,
    type: "success",
    isLoading: false,
    autoClose: 5000,
  });
};

const assertErrorNotification = (message: string) => {
  const loading = toast.loading("Pending"); // will be undefined :)
  expect(toast.update).toHaveBeenLastCalledWith(loading, {
    render: message,
    type: "error",
    isLoading: false,
    autoClose: 5000,
  });
};
