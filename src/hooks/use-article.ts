import { useMemo, useState } from "react";

import sampleArticle from "@/sample-data/sample-article";
import Article from "@/types/article";
import Error from "@/types/error";
import Result from "@/types/result";

const getArticle = async (articleId: string): Promise<Article> => {
  console.log("Getting article", articleId);
  return sampleArticle;
};

type ArticleResult = {
  article: Article | undefined;
};
export type useArticleResult = Result & ArticleResult;

const useArticle = (articleId: string): useArticleResult => {
  const [article, setArticle] = useState<Article | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | undefined>(undefined);

  useMemo(() => {
    const fetchAccount = async () => {
      try {
        setArticle(await getArticle(articleId));
      } catch (e) {
        setError({ message: "Error" });
      }
      setIsLoading(false);
    };

    fetchAccount();
  }, [articleId]);

  return { article, isLoading, error };
};

export default useArticle;
