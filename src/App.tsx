import { Route, Routes } from "react-router-dom";

import Logo from "./components/Logo/Logo";
import Home from "./pages/Home/Home";
import size from "./types/size";

export default function App() {
  return (
    <main className="kh-gradient h-screen w-screen overflow-hidden">
      <Logo logoSize={size.MEDIUM} />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
}
