import Loader from "@/components/Loader/Loader";
import usePodcast from "@/hooks/use-podcast";
import Podcast from "@/types/podcast";

interface PodcastProps {
  id: string;
  description: string;
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
        <div data-testid="content" className="mx-auto w-9/12">
          <div>
            {description ? description : "Episode Description Unavailable"}
          </div>
          {podcast.spotifyUrl && <a href={podcast.spotifyUrl}>Spotify</a>}
          {podcast.applePodcastsUrl && (
            <a href={podcast.applePodcastsUrl}>Apple</a>
          )}
        </div>
      )}
    </div>
  );
}
