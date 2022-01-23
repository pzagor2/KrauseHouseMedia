import { Route, Routes } from "react-router-dom";

import HeaderLayout from "./layouts/HeaderLayout/HeaderLayout";
import ContentPage from "./pages/Content/ContentPage";
import HomePage from "./pages/Home/HomePage";
import ThirdWebProvider from "./Providers/ThirdWebProvider";

export default function App() {
  return (
    <main className="kh-gradient h-screen w-screen">
      <ThirdWebProvider>
        <HeaderLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:id" element={<ContentPage />} />
          </Routes>
        </HeaderLayout>
      </ThirdWebProvider>
    </main>
  );
}
