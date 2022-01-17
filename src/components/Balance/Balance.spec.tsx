import { render, screen } from "@testing-library/react";

import { useUSDResult } from "@/hooks/use-usd";
import Currency from "@/types/currency";

import Balance from "./Balance";

let mockUseUSDResult: useUSDResult = {
  usd: 100,
  isLoading: false,
  error: undefined,
};

jest.mock("@/hooks/use-usd.ts", () => {
  return jest.fn(() => mockUseUSDResult);
});

describe("Balance", () => {
  test("can display eth balance", () => {
    render(<Balance amount={42} currency={Currency.ETH} />);

    const balance = screen.getByText("42 ETH");

    expect(balance).toBeInTheDocument();
  });

  test("can display usd balance", () => {
    render(<Balance amount={42} currency={Currency.ETH} />);

    const balance = screen.getByText("$100.00");

    expect(balance).toBeInTheDocument();
  });

  test("displays error state when useUSD errors", () => {
    mockUseUSDResult = {
      usd: undefined,
      isLoading: true,
      error: { message: "Error" },
    };
    render(<Balance amount={42} currency={Currency.ETH} />);
    const error = screen.getByTestId("error");
    expect(error).toHaveTextContent(/Error/i);
  });

  test("displays error state when amount undefined", () => {
    render(<Balance amount={undefined} currency={Currency.ETH} />);
    const error = screen.getByTestId("error");
    expect(error).toHaveTextContent(/Error/i);
  });

  test("displays error state when currency undefined", () => {
    render(<Balance amount={42} currency={undefined} />);
    const error = screen.getByTestId("error");
    expect(error).toHaveTextContent(/Error/i);
  });

  test("displays loading state when useUSD loading", () => {
    mockUseUSDResult = {
      usd: undefined,
      isLoading: true,
      error: undefined,
    };
    render(<Balance amount={42} currency={Currency.ETH} />);
    const loading = screen.getByTestId("loading");
    expect(loading).toHaveTextContent(/Loading/i);
  });
});
