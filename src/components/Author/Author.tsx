import { useMemo, useState } from "react";

import author from "@/assets/author.png";
import Author from "@/types/author";
import { dateObjectToString } from "@/util/date";

interface AuthorProps {
  authorId: string;
  date?: Date;
  readTime?: string;
}

export default function Author({ date, readTime }: AuthorProps) {
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
    <div data-testid="author" className="flex gap-x-3">
      <img
        className="rounded-full w-10 h-10"
        data-testid="author-image"
        src={author}
        alt=""
      />
      <div
        className={`text-${
          postInfo ? "sm" : "md"
        } leading-snug flex flex-col justify-center`}
      >
        <div className="roboto tracking-wide" data-testid="author-name">
          podfog
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
