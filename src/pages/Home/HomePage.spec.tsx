import { render, screen } from "@testing-library/react";

import { useContentListResult } from "@/hooks/use-content-list";
import sampleContent from "@/sample-data/sample-content-list";
import Content from "@/types/content";

import HomePage from "./HomePage";

let contentListResult = {
  contentList: [] as Content[],
  isLoading: false,
  error: undefined,
} as useContentListResult;
jest.mock("@/hooks/use-content-list", () => {
  return jest.fn(() => contentListResult);
});

describe("HomePage", () => {
  it("should render home page", () => {
    // arrange
    render(<HomePage />);

    // act
    const homePage = screen.getByTestId("home-page");

    // assert
    expect(homePage).toBeInTheDocument();
  });

  it("should render loading", () => {
    contentListResult = {
      contentList: [],
      isLoading: true,
      error: undefined,
    };

    // arrange
    render(<HomePage />);

    // act
    const loading = screen.getByTestId("loading");

    // assert
    expect(loading).toBeInTheDocument();
  });

  it("should render error", () => {
    contentListResult = {
      contentList: [],
      isLoading: false,
      error: { message: "error" },
    };

    // arrange
    render(<HomePage />);

    // act
    const error = screen.getByTestId("error");

    // assert
    expect(error).toBeInTheDocument();
  });

  it("should render error when no content", () => {
    contentListResult = {
      contentList: [],
      isLoading: false,
      error: undefined,
    };

    // arrange
    render(<HomePage />);

    // act
    const error = screen.getByTestId("error");

    // assert
    expect(error).toBeInTheDocument();
  });

  it("should render error when content undefined", () => {
    contentListResult = {
      contentList: undefined,
      isLoading: false,
      error: undefined,
    };

    // arrange
    render(<HomePage />);

    // act
    const error = screen.getByTestId("error");
    const text = screen.getByText("No articles found", { exact: false });

    // assert
    expect(error).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });

  it("should render error when content but also error", () => {
    contentListResult = {
      contentList: sampleContent,
      isLoading: false,
      error: { message: "error" },
    };

    // arrange
    render(<HomePage />);

    // act
    const error = screen.getByTestId("error");

    // assert
    expect(error).toBeInTheDocument();
  });

  it("should render error when loading but also error", () => {
    contentListResult = {
      contentList: sampleContent,
      isLoading: false,
      error: { message: "error" },
    };

    // arrange
    render(<HomePage />);

    // act
    const error = screen.getByTestId("error");
    const loading = screen.queryByTestId("loading");

    // assert
    expect(error).toBeInTheDocument();
    expect(loading).not.toBeInTheDocument();
  });
});
