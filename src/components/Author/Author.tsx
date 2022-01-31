import { useMemo, useState } from "react";

import authorImage from "@/assets/author.png";
import useAuthor from "@/hooks/use-author";
import Author from "@/types/author";
import { dateObjectToString } from "@/util/date";

interface AuthorProps {
  authorId: string;
  date?: Date;
  readTime?: string;
  className?: string;
}

export default function Author({
  authorId,
  date,
  readTime,
  className,
}: AuthorProps) {
  const { author, isLoading, error } = useAuthor(authorId);
  const [postInfo, setPostInfo] = useState<string | undefined>();

  useMemo(() => {
    const getPostInfo = (): string | undefined => {
      if (date && readTime) {
        return `${dateObjectToString(date)} • ${readTime}`;
      } else if (date) {
        return `${dateObjectToString(date)}`;
      } else if (readTime) {
        return readTime;
      } else {
        return undefined;
      }
    };
    setPostInfo(getPostInfo());
  }, [date, readTime]);

  return (
    <div data-testid="author" className={`flex gap-x-3 ${className}`}>
      <img
        className="rounded-full w-10 h-10"
        data-testid="author-image"
        src={authorImage}
        alt=""
      />
      <div
        className={`text-${
          postInfo ? "sm" : "md"
        } leading-snug flex flex-col justify-center`}
      >
        <div className="roboto tracking-wide" data-testid="author-name">
          {!isLoading && !error && author?.name}
        </div>
        {postInfo && (
          <div className="opacity-50 font-light" data-testid="post-info">
            {postInfo}
          </div>
        )}
      </div>
    </div>
  );
}
