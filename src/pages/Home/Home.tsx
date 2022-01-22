import Author from "@/components/Author/Author";

export default function Home() {
  return (
    <div data-testid="home">
      <Author authorId="" date={new Date(2022, 0, 10)} readTime={10} />
    </div>
  );
}
