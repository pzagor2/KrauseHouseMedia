import { useMemo, useState } from "react";

import woman from "@/assets/woman.png";
import Author from "@/types/author";
import { dateObjectToString } from "@/util/date";

interface AuthorProps {
  authorId: string;
  date?: Date;
  readTime?: number;
}

export default function Author({ date, readTime }: AuthorProps) {
  const [postInfo, setPostInfo] = useState<string | undefined>();

  useMemo(() => {
    const getPostInfo = (): string | undefined => {
      if (date && readTime) {
        return `${dateObjectToString(date)} • ${readTime} min read`;
      } else if (date) {
        return `${dateObjectToString(date)}`;
      } else if (readTime) {
        return `${readTime} min read`;
      } else {
        return undefined;
      }
    };
    setPostInfo(getPostInfo());
  }, [date, readTime]);

  return (
    <div data-testid="author" className="flex gap-x-2">
      <img
        className="rounded-full w-10 h-10"
        data-testid="author-image"
        src={woman}
        alt=""
      />
      <div
        className={`text-${
          postInfo ? "sm" : "md"
        } leading-snug flex flex-col justify-center`}
      >
        <div data-testid="author-name">Jen Greenwall</div>
        {postInfo && (
          <div className="opacity-50 font-light" data-testid="post-info">
            {postInfo}
          </div>
        )}
      </div>
    </div>
  );
}
