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
          {article?.blocks?.map((block, index) => {
            if (block.blockType === "paragraph") {
              return (
                <div key={index}>
                  {block.text ?? ""}
                  <br />
                </div>
              );
            } else if (block.blockType === "video") {
              return (
                <div key={index}>
                  <video controls src={block.url} width="100%" height="100%" />
                  <br />
                </div>
              );
            } else if (block.blockType === "header") {
              return (
                <div key={index} className="text-4xl font-semibold">
                  <br />
                  {block.text}
                </div>
              );
            }
          })}
        </div>
      )}
    </div>
  );
}
