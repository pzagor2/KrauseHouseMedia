import { Helmet } from "react-helmet";

interface PageHelmetProps {
  title?: string;
}

export default function PageHelmet({ title }: PageHelmetProps) {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
}
