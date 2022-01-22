import { render, screen } from "@testing-library/react";

import Home from "./Home";

describe("Home", () => {
  it("should render home page", () => {
    // arrange
    render(<Home />);

    // act
    const home = screen.getByTestId("home");

    // assert
    expect(home).toBeInTheDocument();
  });
});
