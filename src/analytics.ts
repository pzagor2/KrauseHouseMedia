import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";

initializeApp(firebaseConfig);
export default getAnalytics();
