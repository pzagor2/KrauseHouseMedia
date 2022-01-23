import { Link } from "react-router-dom";

import ConnectWallet from "@/components/ConnectWallet/ConnectWallet";
import Logo from "@/components/Logo/Logo";
import size from "@/types/size";

interface HeaderLayoutProps {
  children: React.ReactNode;
}

export default function HeaderLayout({ children }: HeaderLayoutProps) {
  return (
    <div
      id="layout"
      className="w-full h-full overflow-y-scroll px-6 md:px-24 pb-24"
    >
      <div className="flex justify-between">
        <div className="inline-block">
          <Link to="/">
            <Logo logoSize={size.MEDIUM} />
          </Link>
        </div>
        <ConnectWallet />
      </div>
      {children}
    </div>
  );
}
