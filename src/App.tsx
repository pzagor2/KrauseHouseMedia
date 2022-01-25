import "react-toastify/dist/ReactToastify.css";

import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import HeaderLayout from "./layouts/HeaderLayout/HeaderLayout";
import ContentPage from "./pages/Content/ContentPage";
import HomePage from "./pages/Home/HomePage";
import ThirdWebProvider from "./providers/ThirdWebProvider";

export default function App() {
  return (
    <main className="kh-gradient h-screen w-screen">
      <ThirdWebProvider>
        <HeaderLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:id" element={<ContentPage />} />
          </Routes>
          <ToastContainer
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            rtl={false}
          />
        </HeaderLayout>
      </ThirdWebProvider>
    </main>
  );
}
