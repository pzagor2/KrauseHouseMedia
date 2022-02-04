import { render, screen } from "@testing-library/react";

import { useArticleResult } from "@/hooks/use-article";
import { useAuthorResult } from "@/hooks/use-author";
import { useContentListResult } from "@/hooks/use-content-list";
import ThirdWebProvider from "@/providers/ThirdWebProvider";
import sampleArticle from "@/sample-data/sample-article";
import sampleAuthor from "@/sample-data/sample-author";
import sampleContent from "@/sample-data/sample-content-list";
import Content from "@/types/content";
import ContentType from "@/types/content-type";

import ContentPage from "./ContentPage";
import samplePodcast from "@/sample-data/sample-podcast";
import { usePodcastResult } from "@/hooks/use-podcast";

let routeId = "1";
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"), // use actual for all non-hook parts
  useParams: () => ({
    id: routeId,
  }),
  useRouteMatch: () => ({ url: "/company/company-id1/team/team-id1" }),
}));

const authorResult = {
  author: sampleAuthor,
  isLoading: false,
  error: undefined,
} as useAuthorResult;
jest.mock("@/hooks/use-author", () => {
  return jest.fn(() => authorResult);
});

let contentListResult = {
  contentList: sampleContent as Content[],
  isLoading: false,
  error: undefined,
} as useContentListResult;
jest.mock("@/hooks/use-content-list", () => {
  return jest.fn(() => contentListResult);
});

const articleResult = {
  article: sampleArticle,
  isLoading: false,
  error: undefined,
} as useArticleResult;
jest.mock("@/hooks/use-article", () => {
  return jest.fn(() => articleResult);
});

const podcastResult = {
  podcast: samplePodcast,
  isLoading: false,
  error: undefined,
} as usePodcastResult;
jest.mock("@/hooks/use-podcast", () => {
  return jest.fn(() => podcastResult);
});

describe("ContentPage", () => {
  it("should render content page", () => {
    // arrange
    render(
      <ThirdWebProvider>
        <ContentPage />
      </ThirdWebProvider>
    );

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
    render(
      <ThirdWebProvider>
        <ContentPage />
      </ThirdWebProvider>
    );

    // act
    const title = screen.getByText("Content 42");

    // assert
    expect(title).toBeInTheDocument();
  });

  it("should render error when unknown type given", () => {
    const content = {
      id: "42",
      title: "Content 42",
      description: "Description 42",
      imageUrl: "https://image-url-42.com",
      contentType: "?" as ContentType,
    };
    contentListResult = {
      contentList: [content],
      isLoading: false,
      error: undefined,
    } as useContentListResult;

    // arrange
    render(
      <ThirdWebProvider>
        <ContentPage />
      </ThirdWebProvider>
    );

    // act
    const error = screen.getByTestId("error");

    // assert
    expect(error).toBeInTheDocument();
  });

  it("should render error when no article id given", () => {
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

    // arrange
    render(
      <ThirdWebProvider>
        <ContentPage />
      </ThirdWebProvider>
    );

    // act
    const error = screen.getByTestId("error");

    // assert
    expect(error).toBeInTheDocument();
  });

  it("should render article when article type given", () => {
    const content = {
      id: "42",
      title: "Content 42",
      description: "Description 42",
      imageUrl: "https://image-url-42.com",
      contentType: "article" as ContentType,
      articleId: "42",
    };
    contentListResult = {
      contentList: [content],
      isLoading: false,
      error: undefined,
    } as useContentListResult;

    render(
      <ThirdWebProvider>
        <ContentPage />
      </ThirdWebProvider>
    );

    // act
    const article = screen.getByTestId("article");
    expect(article).toBeInTheDocument();
  });

  it("should render tip button", () => {
    const content = {
      id: "42",
      title: "Content 42",
      description: "Description 42",
      imageUrl: "https://image-url-42.com",
      contentType: "article" as ContentType,
      articleId: "42",
      authorId: "42",
    };
    contentListResult = {
      contentList: [content],
      isLoading: false,
      error: undefined,
    } as useContentListResult;

    render(
      <ThirdWebProvider>
        <ContentPage />
      </ThirdWebProvider>
    );

    // act
    const tip = screen.getByTestId("tip-button");
    expect(tip).toBeInTheDocument();
  });
});
