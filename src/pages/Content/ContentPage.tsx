import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ShowOnScroll from "@/animations/ShowOnScroll/ShowOnScroll";
import Author from "@/components/Author/Author";
import Card from "@/components/Card/Card";
import Loader from "@/components/Loader/Loader";
import PageHelmet from "@/components/PageHelmet/PageHelmet";
import useContentList from "@/hooks/use-content-list";
import Article from "@/pages/Content/components/Article/Article";
import Podcast from "@/pages/Content/components/Podcast/Podcast";
import TipButton from "@/pages/Content/components/TipButton/TipButton";
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
    switch (content?.contentType) {
      case ContentType.ARTICLE:
        return content.articleId ? (
          <Article id={content.articleId} />
        ) : (
          <div data-testid="error">Error</div>
        );
      case ContentType.PODCAST:
        return content.podcastId ? (
          <Podcast id={content.podcastId} />
        ) : (
          <div data-testid="error">Error</div>
        );
      default:
        return <div data-testid="error">Error</div>;
    }
  };

  return (
    <div data-testid="content-page">
      <PageHelmet title={content?.title} pageType={content?.contentType} />
      {isLoading && (
        <div data-testid="loading">
          <Loader className="my-56" />
        </div>
      )}
      {error && <div data-testid="error">Error: {error.message}</div>}
      {content && !error && !isLoading && (
        <Card className="overflow-hidden">
          <div>
            <img
              src={content.imageUrl}
              alt={content.title}
              className="w-full h-52 lg:h-96 object-cover object-top"
            />
          </div>
          <div className="mx-6 sm:mx-12 leading-relaxed text-lg transform -translate-y-4">
            <div className="flex flex-col gap-y-4 mb-12">
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
            <div className="md:my-12 lg:mx-40 2xl:mx-72">{getContent()}</div>
          </div>
          {content?.authorId && (
            <ShowOnScroll scrollPercentToShowAt={0.01}>
              <div className="flex justify-center items-center absolute mx-auto bottom-4 left-0 right-0">
                <TipButton authorId={content?.authorId} />
              </div>
            </ShowOnScroll>
          )}
        </Card>
      )}
    </div>
  );
}
