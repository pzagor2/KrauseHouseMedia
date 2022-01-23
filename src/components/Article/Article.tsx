import useArticle from "@/hooks/use-article";
import Article from "@/types/article";

interface ArticleProps {
  id: string;
}

export default function Article({ id }: ArticleProps) {
  const { article, isLoading, error } = useArticle(id);

  return (
    <div data-testid="article">
      {article && !error && !isLoading && (
        <div data-testid="content">
          {article?.text.split("\n").map((line, index) => (
            <div key={index}>
              {line}
              <br />
              <br />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
