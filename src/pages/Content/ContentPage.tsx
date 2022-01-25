import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ShowOnScroll from "@/animations/ShowOnScroll/ShowOnScroll";
import Article from "@/components/Article/Article";
import Author from "@/components/Author/Author";
import Card from "@/components/Card/Card";
import TipButton from "@/components/TipButton/TipButton";
import useContentList from "@/hooks/use-content-list";
import Content from "@/types/content";
import ContentType from "@/types/content-type";

export default function ContentPage() {
  const { id } = useParams();
  const { contentList, isLoading, error } = useContentList();

  const [content, setContent] = useState<Content | undefined>();

  useEffect(() => {
    if (contentList) {
      setContent(contentList.find((c: Content) => c.id === id));
    }
  }, [contentList, id]);

  const getContent = () => {
    if (!content?.articleId) {
      return <div data-testid="error">Error</div>;
    }
    switch (content?.contentType) {
      case ContentType.ARTICLE:
        return <Article id={content.articleId} />;
      default:
        return <div data-testid="error">Error</div>;
    }
  };

  return (
    <div data-testid="content-page">
      {isLoading && <div data-testid="loading">Loading...</div>}
      {error && <div data-testid="error">Error: {error.message}</div>}
      {content && !error && !isLoading && (
        <Card className="overflow-hidden">
          <div>
            <img
              src={content.imageUrl}
              alt={content.title}
              className="w-full h-52 lg:h-96 object-cover"
            />
          </div>
          <div className="mx-12 lg:mx-24 2xl:mx-72 transform -translate-y-4">
            <div className="flex flex-col gap-y-4 mb-12 md:mb-24 ">
              {content?.authorId && (
                <Author
                  authorId={content.authorId}
                  readTime={content.readTime}
                  date={content.date}
                  className="flex-col text-center items-center gap-y-1"
                />
              )}
              <div
                className="text-center text-4xl font-bold xl:mx-48"
                data-testid="title"
              >
                {content.title}
              </div>
            </div>
            <div className="my-12 md:my-24">{getContent()}</div>
          </div>
          <ShowOnScroll scrollPercentToShowAt={0.1}>
            <TipButton className="absolute mx-auto left-0 right-0 bottom-4" />
          </ShowOnScroll>
        </Card>
      )}
    </div>
  );
}
