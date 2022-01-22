import ContentType from "./content-type";

type Content = {
  title: string;
  contentType: ContentType;
  authorId?: string;
  date?: Date;
  readTime?: string;
  description: string;
  imageUrl: string;
  tags?: string[];
};

export default Content;
