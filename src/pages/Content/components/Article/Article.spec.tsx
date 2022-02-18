import { render, screen } from "@testing-library/react";

import { useArticleResult } from "@/hooks/use-article";
import sampleArticle from "@/sample-data/sample-article";

import Article from "./Article";

let articleResult: useArticleResult;
jest.mock("@/hooks/use-article", () => {
  return jest.fn(() => articleResult);
});

describe("Article", () => {
  beforeEach(() => {
    articleResult = {
      article: sampleArticle,
      isLoading: false,
      error: undefined,
    } as useArticleResult;
  });

  it("should render loader while loading", () => {
    articleResult.isLoading = true;
    // arrange
    render(<Article id={"1"} />);

    // act
    const loaderObject = screen.getByTestId("loading");

    // assert
    expect(loaderObject).toBeInTheDocument();
  });

  it("should render content card", () => {
    // arrange
    render(<Article id={"1"} />);

    // act
    const articleObject = screen.getByTestId("article");

    // assert
    expect(articleObject).toBeInTheDocument();
  });

  it("should render subcomponents", () => {
    // arrange
    render(<Article id={"1"} />);

    // act
    const content = screen.getByTestId("content");

    // assert
    expect(content).toBeInTheDocument();
  });
});
