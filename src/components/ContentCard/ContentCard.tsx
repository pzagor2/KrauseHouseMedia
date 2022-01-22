import Content from "@/types/content";

import Author from "../Author/Author";
import Card from "../Card/Card";

interface ContentCardProps {
  content: Content;
}

export default function ContentCard({ content }: ContentCardProps) {
  return (
    <div data-testid="content-card">
      <Card className="flex-1 overflow-hidden shadow-lg">
        <div className="h-50 overflow-hidden">
          <img
            src={content.imageUrl}
            alt={content.title}
            className="w-full"
            data-testid="image"
          />
        </div>
        <div className="p-6 h-84 flex flex-col justify-between">
          <div className="flex flex-col gap-y-2">
            <div className="capitalize text-sm opacity-50">
              {content.contentType}
            </div>
            <div
              className="text-2xl font-semibold leading-tight roboto tracking-wide"
              data-testid="title"
            >
              {content.title}
            </div>
            <div
              data-testid="description"
              className="opacity-50 text-base font-extralight"
            >
              {content.description}
            </div>
          </div>
          <Author authorId="" readTime={content.readTime} date={content.date} />
        </div>
      </Card>
    </div>
  );
}
