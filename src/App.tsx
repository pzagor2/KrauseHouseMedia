import { Link, Route, Routes } from "react-router-dom";

import Logo from "./components/Logo/Logo";
import ContentPage from "./pages/Content/ContentPage";
import HomePage from "./pages/Home/HomePage";
import size from "./types/size";

export default function App() {
  return (
    <main className="kh-gradient h-screen w-screen">
      <div className="w-full h-full overflow-scroll px-6 md:px-24 pb-24">
        <div className="inline-block">
          <Link to="/">
            <Logo logoSize={size.MEDIUM} />
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<ContentPage />} />
        </Routes>
      </div>
    </main>
  );
}
