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
  seriesId?: string;
};

export default Content;
