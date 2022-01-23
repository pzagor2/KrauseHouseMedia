import ContentType from "./content-type";

type Content = {
  id: string;
  title: string;
  contentType: ContentType;
  authorId?: string;
  date?: Date;
  readTime?: string;
  description: string;
  imageUrl: string;
  tags?: string[];
  articleId?: string;
};

export default Content;
