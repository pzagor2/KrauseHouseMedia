import { Analytics, getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

import firebaseConfig from "./firebaseConfig";

let analytics: Analytics | null = null;
// only use analytics if not on localhost
if (location.hostname != "localhost") {
  initializeApp(firebaseConfig);
  analytics = getAnalytics();
}

export default analytics;
