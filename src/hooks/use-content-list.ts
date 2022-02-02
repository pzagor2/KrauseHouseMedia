import { useMemo, useState } from "react";

import sampleContent from "@/sample-data/sample-content-list";
import Content from "@/types/content";
import Error from "@/types/error";
import Result from "@/types/result";
import axios from "axios";

const getContentList = async (): Promise<Content[]> => {
  const content = await axios.get(
    `https://us-central1-krause-media-dev.cloudfunctions.net/mediaApi/content`
  );
  return content.data;
};

type ContentListResult = {
  contentList: Content[] | undefined;
};
export type useContentListResult = Result & ContentListResult;

const useContentList = (): useContentListResult => {
  const [contentList, setContentList] = useState<Content[] | undefined>(
    undefined
  );
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | undefined>(undefined);

  useMemo(() => {
    const fetchAccount = async () => {
      try {
        setContentList(await getContentList());
      } catch (e) {
        setError({ message: "Error" });
      }
      setIsLoading(false);
    };

    fetchAccount();
  }, []);

  return { contentList, isLoading, error };
};

export default useContentList;
