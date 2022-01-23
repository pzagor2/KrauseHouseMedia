import { render, screen } from "@testing-library/react";

import ThirdWebProvider from "@/providers/ThirdWebProvider";

import ConnectWallet from "./ConnectWallet";

describe("ConnectWallet", () => {
  it("should render wallet", () => {
    // arrange
    render(
      <ThirdWebProvider>
        <ConnectWallet />
      </ThirdWebProvider>
    );

    // act
    const connectWallet = screen.getByTestId("connect-wallet");

    // assert
    expect(connectWallet).toBeInTheDocument();
  });
});
