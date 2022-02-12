import useArticle from "@/hooks/use-article";
import Article, { BlockType } from "@/types/article";

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
            if (block.blockType === BlockType.Paragraph) {
              return (
                <div key={index}>
                  {block.text ?? ""}
                  <br />
                  <br />
                </div>
              );
            } else if (block.blockType === BlockType.Video) {
              return (
                <div key={index}>
                  <video controls src={block.url} width="100%" height="100%" />
                  <br />
                </div>
              );
            } else if (block.blockType === BlockType.Header) {
              return (
                <div key={index} className="text-4xl font-semibold mb-2">
                  <br />
                  {block.text}
                </div>
              );
            } else if (block.blockType == BlockType.Break) {
              return <hr key={index} />;
            } else if (block.blockType == BlockType.Space) {
              return <div key={index} className="mt-2"></div>;
            } else if (block.blockType == BlockType.Line) {
              return <div key={index}>{block.text}</div>;
            }
          })}
        </div>
      )}
    </div>
  );
}
