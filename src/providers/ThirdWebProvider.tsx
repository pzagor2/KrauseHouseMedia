import { ThirdwebWeb3Provider } from "@3rdweb/hooks";

interface ThirdWebProviderProps {
  children: React.ReactNode;
}

const ThirdWebProvider = ({ children }: ThirdWebProviderProps) => {
  // Put the ethereum chain ids of the chains you want to support
  const supportedChainIds = [1, 4, 137];

  /**
   * Include the connectors you want to support
   * injected - MetaMask
   * magic - Magic Link
   * walletconnect - Wallet Connect
   * walletlink - Coinbase Wallet
   */
  const connectors = {
    injected: {},
    walletconnect: {},
    walletlink: {
      appName: "thirdweb - demo",
      url: "https://thirdweb.com",
      darkMode: false,
    },
  };

  return (
    <ThirdwebWeb3Provider
      connectors={connectors}
      supportedChainIds={supportedChainIds}
    >
      {children}
    </ThirdwebWeb3Provider>
  );
};

export default ThirdWebProvider;
