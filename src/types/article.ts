enum BlockType {
  Header = "header",
  Paragraph = "paragraph",
  Video = "video",
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
