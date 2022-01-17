import { useState } from "react";

import AccountBalanceCard from "./components/AccountBalanceCard/AccountBalanceCard";
import Logo from "./components/Logo/Logo";
import size from "./types/size";

export default function App() {
  const [accountAddress, setAccountAddress] = useState("");

  setTimeout(() => {
    setAccountAddress("0x34ef30c856CbaeDD604034b7202D9D7de23277dc");
  }, 1000);

  return (
    <main className="kh-gradient h-screen w-screen overflow-hidden">
      <Logo logoSize={size.MEDIUM} />
      <AccountBalanceCard accountAddress={accountAddress} />
    </main>
  );
}
