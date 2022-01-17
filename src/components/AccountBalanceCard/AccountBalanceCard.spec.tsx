import { render, screen } from "@testing-library/react";

import { useAccountResult } from "@/hooks/use-account";
import Currency from "@/types/currency";

import AccountBalanceCard from "./AccountBalanceCard";

let mockUseAccountResult: useAccountResult = {
  account: {
    address: "0x0",
    balance: 42,
    nativeCurrency: Currency.ETH,
    transactions: [],
  },
  isLoading: false,
  error: undefined,
};

jest.mock("@/hooks/use-account.ts", () => {
  return jest.fn(() => mockUseAccountResult);
});

describe("AccountBalanceCard", () => {
  test("displays error state when empty account address", () => {
    render(<AccountBalanceCard accountAddress="" />);
    const error = screen.getByTestId("error");
    expect(error).toHaveTextContent(/Error/i);
  });

  test("displays error state when useAccount errors", () => {
    mockUseAccountResult = {
      account: undefined,
      isLoading: true,
      error: { message: "Error" },
    };
    render(<AccountBalanceCard accountAddress="0x0" />);
    const error = screen.getByTestId("error");
    expect(error).toHaveTextContent(/Error/i);
  });

  test("displays loading state when useAccount loading", () => {
    mockUseAccountResult = {
      account: undefined,
      isLoading: true,
      error: undefined,
    };
    render(<AccountBalanceCard accountAddress="0x0" />);
    const loading = screen.getByTestId("loading");
    expect(loading).toHaveTextContent(/Loading/i);
  });
});
