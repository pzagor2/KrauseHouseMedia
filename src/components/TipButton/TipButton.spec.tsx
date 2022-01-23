import { render, screen } from "@testing-library/react";

import TipButton from "./TipButton";

describe("TipButton", () => {
  it("should render", () => {
    render(<TipButton />);

    const button = screen.getByTestId("tip-button");
    expect(button).toBeInTheDocument();
  });
});
