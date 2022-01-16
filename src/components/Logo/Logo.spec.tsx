import { render, screen } from "@testing-library/react";

import size from "@/types/size";

import Logo from "./Logo";

describe("Logo", () => {
  it("should render default size", () => {
    // arrange
    render(<Logo></Logo>);

    // act
    const logo = screen.getByTestId("logo");

    // assert
    expect(logo).toHaveClass("logoMedium");
  });

  it("should render small size", () => {
    // arrange
    render(<Logo logoSize={size.SMALL}></Logo>);

    // act
    const logo = screen.getByTestId("logo");

    // assert
    expect(logo).toHaveClass("logoSmall");
  });

  it("should render medium size", () => {
    // arrange
    render(<Logo logoSize={size.MEDIUM}></Logo>);

    // act
    const logo = screen.getByTestId("logo");

    // assert
    expect(logo).toHaveClass("logoMedium");
  });

  it("should render large size", () => {
    // arrange
    render(<Logo logoSize={size.LARGE}></Logo>);

    // act
    const logo = screen.getByTestId("logo");

    // assert
    expect(logo).toHaveClass("logoLarge");
  });
});
