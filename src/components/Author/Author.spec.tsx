import { render, screen } from "@testing-library/react";

import Author from "./Author";

describe("Author", () => {
  it("should render component", () => {
    // arrange
    render(<Author authorId="" />);

    // act
    const author = screen.getByTestId("author");

    // assert
    expect(author).toBeInTheDocument();
  });

  it("should render author image", () => {
    // arrange
    render(<Author authorId="" />);

    // act
    const authorImage = screen.getByTestId("author-image");

    // assert
    expect(authorImage).toBeInTheDocument();
  });

  it("should not render post info when none provided", () => {
    // arrange
    render(<Author authorId="" />);

    // act
    const postInfo = screen.queryByTestId("post-info");

    // assert
    expect(postInfo).not.toBeInTheDocument();
  });

  it("should render date when provided", () => {
    // arrange
    render(<Author authorId="" date={new Date(2022, 0, 10)} />);

    // act
    const postInfo = screen.queryByTestId("post-info");
    const date = screen.getByText("Jan 10, 2022", { exact: false });

    // assert
    expect(postInfo).toBeInTheDocument();
    expect(date).toBeInTheDocument();
  });

  it("should render read time when provided", () => {
    // arrange
    render(<Author authorId="" readTime={10} />);

    // act
    const postInfo = screen.queryByTestId("post-info");
    const readTime = screen.getByText("10 min read", { exact: false });

    // assert
    expect(postInfo).toBeInTheDocument();
    expect(readTime).toBeInTheDocument();
  });

  it("should render read time and date together", () => {
    // arrange
    render(<Author authorId="" date={new Date(2022, 0, 10)} readTime={10} />);

    // act
    const postInfo = screen.queryByTestId("post-info");
    const date = screen.getByText("Jan 10, 2022", { exact: false });
    const readTime = screen.getByText("10 min read", { exact: false });

    // assert
    expect(postInfo).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(readTime).toBeInTheDocument();
  });
});
