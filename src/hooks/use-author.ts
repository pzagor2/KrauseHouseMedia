import axios from "axios";
import { useMemo, useState } from "react";

import Author from "@/types/author";
import Error from "@/types/error";
import Result from "@/types/result";

const getAuthor = async (authorId: string): Promise<Author> => {
  const author = await axios.get(
    `https://us-central1-krause-media-dev.cloudfunctions.net/mediaApi/authors/${authorId}`
  );
  return author.data;
};

type AuthorResult = {
  author: Author | undefined;
};
export type useAuthorResult = Result & AuthorResult;

const useAuthor = (authorId: string): useAuthorResult => {
  const [author, setAuthor] = useState<Author | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | undefined>(undefined);

  useMemo(() => {
    const fetchAccount = async () => {
      try {
        setAuthor(await getAuthor(authorId));
      } catch (e) {
        setError({ message: "Error" });
      }
      setIsLoading(false);
    };

    fetchAccount();
  }, [authorId]);

  return { author, isLoading, error };
};

export default useAuthor;
