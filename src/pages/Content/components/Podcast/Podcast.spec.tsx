import { render, screen } from "@testing-library/react";

import { usePodcastResult } from "@/hooks/use-podcast";
import samplePodcast from "@/sample-data/sample-podcast";

import Podcast from "./Podcast";

const podcastResult = {
  podcast: samplePodcast,
  isLoading: false,
  error: undefined,
} as usePodcastResult;
jest.mock("@/hooks/use-podcast", () => {
  return jest.fn(() => podcastResult);
});

describe("Podcast", () => {
  it("should render content card", () => {
    // arrange
    render(<Podcast id={"1"} />);

    // act
    const podcastObject = screen.getByTestId("podcast");

    // assert
    expect(podcastObject).toBeInTheDocument();
  });

  it("should render subcomponents", () => {
    // arrange
    render(<Podcast id={"1"} />);

    // act
    const content = screen.getByTestId("content");

    // assert
    expect(content).toBeInTheDocument();
  });
});
