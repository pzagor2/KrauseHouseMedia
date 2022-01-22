import { useState } from "react";

import Card from "./components/Card/Card";
import Logo from "./components/Logo/Logo";
import size from "./types/size";

export default function App() {
  return (
    <main className="kh-gradient h-screen w-screen overflow-hidden">
      <Logo logoSize={size.MEDIUM} />
      <Card>Hey</Card>
    </main>
  );
}
