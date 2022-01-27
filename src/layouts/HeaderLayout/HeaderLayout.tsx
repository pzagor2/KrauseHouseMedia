import { motion } from "framer-motion";
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
      <div className="flex justify-between py-6">
        <motion.div
          className="inline-block"
          whileHover={{
            scale: 1.1,
          }}
        >
          <Link to="/">
            <Logo logoSize={size.SMALL} />
          </Link>
        </motion.div>
        <ConnectWallet />
      </div>
      {children}
    </div>
  );
}
