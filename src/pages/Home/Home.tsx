import ContentCard from "@/components/ContentCard/ContentCard";
import Content from "@/types/content";
import ContentType from "@/types/content-type";

export default function Home() {
  const sampleContent: Content[] = [
    {
      title: "Five under the radar trade targets ahead of the deadline",
      contentType: "article" as ContentType,
      imageUrl:
        "https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      readTime: "5 min read",
      date: new Date(2022, 0, 22),
    },
    {
      title: "A really awesome article about basketball",
      contentType: "article" as ContentType,
      imageUrl:
        "https://media.istockphoto.com/photos/multi-sports-collage-about-basketball-american-football-players-and-picture-id919764406?k=20&m=919764406&s=612x612&w=0&h=RZNugLW5dAl5D0OxP4_69Lf8QcVvEFM3KjPILLaJd9M=",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      readTime: "5 min read",
      date: new Date(2022, 0, 22),
    },
    {
      title:
        "Welcome to Around the Association, presented by Krause House • S1, E1",
      contentType: "podcast" as ContentType,
      imageUrl:
        "https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      readTime: "50 min listen",
      date: new Date(2022, 0, 22),
    },
  ];

  return (
    <div data-testid="home">
      <div className="flex flex-row w-full grid grid-cols-3">
        {sampleContent.map((content, idx) => (
          <ContentCard key={idx} content={content} />
        ))}
      </div>
    </div>
  );
}
