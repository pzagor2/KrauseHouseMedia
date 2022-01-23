import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import ThirdWebProvider from "@/Providers/ThirdWebProvider";

import HeaderLayout from "./HeaderLayout";

describe("ConnectWallet", () => {
  it("should render children", () => {
    // arrange
    render(
      <MemoryRouter>
        <ThirdWebProvider>
          <HeaderLayout>HELLO!</HeaderLayout>
        </ThirdWebProvider>
      </MemoryRouter>
    );

    // act
    const innerText = screen.getByText("HELLO!");

    // assert
    expect(innerText).toBeInTheDocument();
  });

  it("should render logo and connect wallet", () => {
    // arrange
    render(
      <MemoryRouter>
        <ThirdWebProvider>
          <HeaderLayout>HELLO!</HeaderLayout>
        </ThirdWebProvider>
      </MemoryRouter>
    );

    // act
    const logo = screen.getByTestId("logo");
    const connectWallet = screen.getByTestId("connect-wallet");

    // assert
    expect(logo).toBeInTheDocument();
    expect(connectWallet).toBeInTheDocument();
  });
});
