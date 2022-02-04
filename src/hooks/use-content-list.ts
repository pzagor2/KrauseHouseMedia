import axios from "axios";
import { useMemo, useState } from "react";

import Content from "@/types/content";
import Error from "@/types/error";
import Result from "@/types/result";

const getContentList = async (): Promise<Content[]> => {
  const contentList = await axios.get(
    `${import.meta.env.VITE_API_BASE_URL}/mediaApi/content`
  );
  return contentList.data.map((content: Content) => {
    return {
      ...content,
      date: new Date(content.date ?? ""),
    };
  });
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
