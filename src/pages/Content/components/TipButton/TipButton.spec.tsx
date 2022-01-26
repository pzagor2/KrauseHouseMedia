import { render, screen } from "@testing-library/react";

import ThirdWebProvider from "@/providers/ThirdWebProvider";

import TipButton from "./TipButton";

describe("TipButton", () => {
  it("should render", () => {
    render(
      <ThirdWebProvider>
        <TipButton />
      </ThirdWebProvider>
    );

    const button = screen.getByTestId("tip-button");
    expect(button).toBeInTheDocument();
  });
});
