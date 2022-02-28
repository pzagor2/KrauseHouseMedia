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
          {description && (
            <div data-testid="podcast-description" className="mb-8">
              {description}
            </div>
          )}

          <div className="flex justify-center gap-x-5">
            {podcast.spotifyUrl && (
              <Button
                className="bg-black"
                onClick={() => window.open(podcast.spotifyUrl, "_blank")}
              >
                <img src="/Spotify_Icon_RGB_Green.png"></img>
                Listen on Spotify
              </Button>
            )}
            {podcast.applePodcastsUrl && (
              <Button
                className="bg-black"
                onClick={() => window.open(podcast.applePodcastsUrl, "_blank")}
              >
                <img src="/Apple_Podcast_Icon.png"></img>
                Listen on Apple Podcasts
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
