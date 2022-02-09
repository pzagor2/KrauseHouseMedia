import { logEvent } from "firebase/analytics";
import { Helmet } from "react-helmet";

import analytics from "@/analytics";
import ContentType from "@/types/content-type";

interface PageHelmetProps {
  title?: string;
  pageType?: ContentType | string;
}

export default function PageHelmet({ title, pageType }: PageHelmetProps) {
  if (analytics) {
    logEvent(analytics, "screen_view", {
      firebase_screen: title,
      firebase_screen_class: pageType,
    });
  }

  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
}
