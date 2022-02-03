import { useWeb3 } from "@3rdweb/hooks";
import { toast } from "react-toastify";

import Button from "@/components/Button/Button";
import useAuthor from "@/hooks/use-author";
import handleTransaction from "@/transactions/handleTransaction";
import sendTip from "@/transactions/SendTip/sendTip";
import Tip from "@/types/tip";

interface TipButtonProps {
  authorId: string;
  className?: string;
}

export default function TipButton({ authorId, className }: TipButtonProps) {
  const { address, provider } = useWeb3();
  const { author, isLoading, error } = useAuthor(authorId);

  const onClick = async () => {
    if (!address || !provider) {
      toast.warning("Please connect to metamask!");
    } else {
      const tip = {
        signer: provider.getSigner(),
        senderAddress: address,
        recipientAddress: author?.ethAddress,
        amount: 5,
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
        Tip {author?.name ? author?.name : "author"} 5 $KRAUSE
      </Button>
    </div>
  );
}
