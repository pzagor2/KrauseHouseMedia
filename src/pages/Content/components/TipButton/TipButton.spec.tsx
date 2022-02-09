import { render, screen } from "@testing-library/react";

import { useAuthorResult } from "@/hooks/use-author";
import ThirdWebProvider from "@/providers/ThirdWebProvider";
import sampleAuthor from "@/sample-data/sample-author";

import TipButton from "./TipButton";

const authorResult = {
  author: sampleAuthor,
  isLoading: false,
  error: undefined,
} as useAuthorResult;
jest.mock("@/hooks/use-author", () => {
  return jest.fn(() => authorResult);
});
jest.mock("@/analytics", () => {
  return null;
});

describe("TipButton", () => {
  it("should render", () => {
    render(
      <ThirdWebProvider>
        <TipButton authorId="42" />
      </ThirdWebProvider>
    );

    const button = screen.getByTestId("tip-button");
    expect(button).toBeInTheDocument();
  });
});
