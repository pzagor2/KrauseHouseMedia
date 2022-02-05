import { Link } from "react-router-dom";

import ContentCard from "@/components/ContentCard/ContentCard";
import Loader from "@/components/Loader/Loader";
import useContentList from "@/hooks/use-content-list";
import { Helmet } from "react-helmet";

export default function HomePage() {
  const { contentList, isLoading, error } = useContentList();

  return (
    <div data-testid="home-page">
      <Helmet>
        <title>Krause Analytics</title>
      </Helmet>
      {isLoading && !error && (
        <div data-testid="loading">
          <Loader className="my-56" />
        </div>
      )}
      {error && <div data-testid="error">Error: {error.message}</div>}
      {(!contentList || (contentList.length == 0 && !error)) && !isLoading && (
        <div data-testid="error">Error: No articles found</div>
      )}
      {!isLoading && !error && contentList && (
        <div className="flex flex-row w-full grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6">
          {contentList
            .sort((a, b) => (b.date?.getTime() ?? 0) - (a.date?.getTime() ?? 0))
            .map(content => (
              <Link
                key={content.id}
                to={`/${content.id}`}
                className="no-underline decoration-current"
              >
                <ContentCard content={content} />
              </Link>
            ))}
        </div>
      )}
    </div>
  );
}
