import { Helmet } from "react-helmet-async";

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
