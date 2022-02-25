import Button from "@/components/Button/Button";
import Loader from "@/components/Loader/Loader";
import usePodcast from "@/hooks/use-podcast";
import Podcast from "@/types/podcast";

interface PodcastProps {
  id: string;
  description?: string;
}

export default function Podcast({ id, description }: PodcastProps) {
  const { podcast, isLoading, error } = usePodcast(id);

  return (
    <div data-testid="podcast">
      {isLoading && (
        <div data-testid="loading">
          <Loader className="my-56" />
        </div>
      )}
      {podcast && !error && !isLoading && (
        <div data-testid="content" className="mx-auto">
          <div data-testid="podcast-description">
            {description ? description : "Episode description unavailable"}
          </div>
          {podcast.spotifyUrl && (
            <Button onClick={() => window.open(podcast.spotifyUrl, "_blank")}>
              Open in Spotify
            </Button>
          )}
          {podcast.applePodcastsUrl && (
            <Button
              onClick={() => window.open(podcast.applePodcastsUrl, "_blank")}
            >
              Open in Apple Podcasts
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
