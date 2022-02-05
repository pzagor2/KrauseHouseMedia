import { toast } from "react-toastify";

import Button from "@/components/Button/Button";
import useAuthor from "@/hooks/use-author";
import useWeb3 from "@/hooks/use-web3";
import handleTransaction from "@/transactions/handleTransaction";
import sendTip from "@/transactions/SendTip/sendTip";
import Tip from "@/types/tip";

interface TipButtonProps {
  authorId: string;
  className?: string;
}

export default function TipButton({ authorId, className }: TipButtonProps) {
  const { address, chainId, provider } = useWeb3();
  const { author, isLoading, error } = useAuthor(authorId);

  const onClick = async () => {
    if (!address || !provider) {
      toast.warning("Please connect your wallet!");
    } else if (chainId !== 137) {
      toast.warning("Gas fees suck! Connect to Polygon to tip.");
    } else {
      const tip = {
        signer: provider.getSigner(),
        senderAddress: address,
        recipientAddress: author?.ethAddress,
        amount: 5,
        chainId: 137,
      } as Tip;
      await handleTransaction(sendTip, tip, {
        pending: "Sending tip...",
        success: "Tip sent!",
      });
    }
  };

  if (isLoading || error || !author?.ethAddress) {
    return <></>;
  }

  return (
    <div data-testid="tip-button">
      <Button
        className={`font-semibold bg-opacity-50 hover:bg-opacity-100 ${className}`}
        onClick={onClick}
      >
        Tip {author?.name ? author?.name : "author"} 5 MATIC
      </Button>
    </div>
  );
}
