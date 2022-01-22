import { render, screen } from "@testing-library/react";

import { useContentListResult } from "@/hooks/use-content-list";
import sampleContent from "@/sample-data/sample-content-list";
import Content from "@/types/content";
import ContentType from "@/types/content-type";

import ContentPage from "./ContentPage";

let routeId = "1";
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"), // use actual for all non-hook parts
  useParams: () => ({
    id: routeId,
  }),
  useRouteMatch: () => ({ url: "/company/company-id1/team/team-id1" }),
}));

let contentListResult = {
  contentList: sampleContent as Content[],
  isLoading: false,
  error: undefined,
} as useContentListResult;
jest.mock("@/hooks/use-content-list", () => {
  return jest.fn(() => contentListResult);
});

describe("ContentPage", () => {
  it("should render content page", () => {
    // arrange
    render(<ContentPage />);

    // act
    const contentPage = screen.getByTestId("content-page");

    // assert
    expect(contentPage).toBeInTheDocument();
  });

  it("should render content based on route", () => {
    const content = {
      id: "42",
      title: "Content 42",
      description: "Description 42",
      imageUrl: "https://image-url-42.com",
      contentType: "article" as ContentType,
    };
    contentListResult = {
      contentList: [content],
      isLoading: false,
      error: undefined,
    } as useContentListResult;
    routeId = "42";

    // arrange
    render(<ContentPage />);

    // act
    const title = screen.getByText("Content 42");

    // assert
    expect(title).toBeInTheDocument();
  });
});
