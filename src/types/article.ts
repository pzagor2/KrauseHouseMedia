export enum BlockType {
  Header = "header",
  Paragraph = "paragraph",
  Video = "video",
  Break = "break",
}

interface ArticleBlock {
  blockType: BlockType;
  text?: string;
  url?: string;
}

type Article = {
  id: string;
  blocks: ArticleBlock[];
};

export default Article;
