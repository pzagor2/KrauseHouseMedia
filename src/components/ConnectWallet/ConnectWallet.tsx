import { useWeb3 } from "@3rdweb/hooks";
import { AiOutlineWallet } from "react-icons/ai";

const ConnectWallet = () => {
  const { address, connectWallet } = useWeb3();

  return (
    <div
      className="flex items-center text-base p-4"
      data-testid="connect-wallet"
    >
      <button
        className="bg-purple bg-opacity-20 hover:bg-opacity-50 transition rounded-md px-4 py-2 flex items-center gap-x-2"
        onClick={() => connectWallet("injected")}
      >
        {address ? (
          address.substring(0, 6) + "..." + address.substring(38)
        ) : (
          <>
            <AiOutlineWallet /> Connect Wallet
          </>
        )}
      </button>
    </div>
  );
};

export default ConnectWallet;
