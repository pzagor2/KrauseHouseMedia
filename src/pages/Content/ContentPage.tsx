import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Card from "@/components/Card/Card";
import useContentList from "@/hooks/use-content-list";
import Content from "@/types/content";

export default function ContentPage() {
  const { id } = useParams();
  const { contentList, isLoading, error } = useContentList();

  const [content, setContent] = useState<Content | undefined>();

  useEffect(() => {
    if (contentList) {
      const content = contentList.find((c: Content) => c.id === id);
      setContent(content);
    }
  }, [contentList, id]);

  return (
    <div data-testid="content-page">
      {isLoading && <div data-testid="loading">Loading...</div>}
      {error && <div data-testid="error">Error: {error.message}</div>}
      {content && !error && !isLoading && <Card>{content.title}</Card>}
    </div>
  );
}
