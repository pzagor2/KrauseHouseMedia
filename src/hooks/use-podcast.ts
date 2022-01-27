import { useMemo, useState } from "react";

import samplePodcast from "@/sample-data/sample-podcast";
import Error from "@/types/error";
import Podcast from "@/types/podcast";
import Result from "@/types/result";

const getPodcast = async (podcastId: string): Promise<Podcast> => {
  console.log("Getting podcast", podcastId);
  return samplePodcast;
};

type PodcastResult = {
  podcast: Podcast | undefined;
};
export type usePodcastResult = Result & PodcastResult;

const usePodcast = (podcastId: string): usePodcastResult => {
  const [podcast, setPodcast] = useState<Podcast | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | undefined>(undefined);

  useMemo(() => {
    const fetchAccount = async () => {
      try {
        setPodcast(await getPodcast(podcastId));
      } catch (e) {
        setError({ message: "Error" });
      }
      setIsLoading(false);
    };

    fetchAccount();
  }, [podcastId]);

  return { podcast, isLoading, error };
};

export default usePodcast;
