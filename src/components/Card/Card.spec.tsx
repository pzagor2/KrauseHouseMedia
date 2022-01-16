import { render, screen } from "@testing-library/react";

import Card from "./Card";

describe("Card", () => {
  it("should render child content", () => {
    // arrange
    render(<Card>Hello Card!</Card>);

    // act
    const card = screen.getByTestId("card");

    // assert
    expect(card).toHaveTextContent(/Hello Card!/i);
  });
});
