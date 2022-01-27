import usePodcast from "@/hooks/use-podcast";
import Podcast from "@/types/podcast";

interface PodcastProps {
  id: string;
}

export default function Podcast({ id }: PodcastProps) {
  const { podcast, isLoading, error } = usePodcast(id);

  return (
    <div data-testid="podcast">
      {podcast && !error && !isLoading && (
        <div data-testid="content" className="mx-auto w-9/12">
          <iframe
            title="Spotify"
            src={podcast.spotifyUrl}
            width="100%"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </div>
      )}
    </div>
  );
}
