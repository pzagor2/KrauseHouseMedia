import { useWeb3 } from "@3rdweb/hooks";
import { AiOutlineWallet } from "react-icons/ai";

import Button from "@/components/Button/Button";

const ConnectWallet = () => {
  const { address, connectWallet } = useWeb3();

  return (
    <div
      className="flex items-center text-base p-4"
      data-testid="connect-wallet"
    >
      <Button onClick={() => connectWallet("injected")}>
        {address ? (
          address.substring(0, 6) + "..." + address.substring(38)
        ) : (
          <>
            <AiOutlineWallet /> Connect Wallet
          </>
        )}
      </Button>
    </div>
  );
};

export default ConnectWallet;
