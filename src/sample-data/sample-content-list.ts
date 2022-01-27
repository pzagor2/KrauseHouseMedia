import Content from "@/types/content";
import ContentType from "@/types/content-type";

const sampleContent: Content[] = [
  {
    id: "1",
    title: "Five under the radar trade targets ahead of the deadline",
    contentType: "article" as ContentType,
    imageUrl:
      "https://www.ncaa.com/_flysystem/public-s3/styles/original/public-s3/images/2021/12/09/memphis-tigers-mens-college-basketball-holiday-wishes.jpg?itok=yu4ZJbVP",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    readTime: "5 min read",
    date: new Date(2022, 0, 22),
    authorId: "1",
    articleId: "1",
  },
  {
    id: "2",
    title: "A really awesome article about basketball",
    contentType: "article" as ContentType,
    imageUrl:
      "https://cdn.nba.com/manage/2022/01/20222501-anthony-davis-drives-vs-nets-cropped.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    readTime: "5 min read",
    date: new Date(2022, 0, 22),
    authorId: "1",
    articleId: "1",
  },
  {
    id: "3",
    title:
      "Welcome to Around the Association, presented by Krause House • S1, E2",
    contentType: "podcast" as ContentType,
    imageUrl:
      "https://thetournament.com/wp-content/uploads/2021/04/BS3_5536-2.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    readTime: "50 min listen",
    date: new Date(2022, 0, 22),
    authorId: "1",
    podcastId: "1",
  },
  {
    id: "4",
    title: "Some cool basketball facts for you",
    contentType: "article" as ContentType,
    imageUrl: "https://cdn.nba.com/manage/2021/07/franceusa8.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    readTime: "5 min read",
    date: new Date(2022, 0, 22),
    authorId: "1",
    articleId: "1",
  },
  {
    id: "5",
    title: "We're gonna buy a team, dammit",
    contentType: "article" as ContentType,
    imageUrl:
      "https://www.fiba.basketball/images.fiba.com/Graphic/A/4/9/F/KhmXxFOkCUmLhWPvXZTwPg.jpg?v=20210830164804465",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    readTime: "5 min read",
    date: new Date(2022, 0, 22),
    authorId: "1",
    articleId: "1",
  },
  {
    id: "6",
    title:
      "Welcome to Around the Association, presented by Krause House • S1, E1",
    contentType: "podcast" as ContentType,
    imageUrl:
      "https://www.washingtonpost.com/resizer/Xh3iBv2MaA-hkH9SRsRzyqbUnMg=/arc-anglerfish-washpost-prod-washpost/public/IH5V2AYQSZHD5IR7A35E3PNRMQ.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    readTime: "50 min listen",
    date: new Date(2022, 0, 22),
    authorId: "1",
    podcastId: "1",
  },
];

export default sampleContent;
