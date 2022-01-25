import { useWeb3 } from "@3rdweb/hooks";
import { toast } from "react-toastify";

import Button from "@/components/Button/Button";
import sendTip from "@/transactions/SendTip/sendTip";
import Tip from "@/types/tip";

interface TipButtonProps {
  className?: string;
}

export default function TipButton({ className }: TipButtonProps) {
  const { address, provider } = useWeb3();

  const onClick = async () => {
    if (!address || !provider) {
      toast.warning("Please connect to metamask!");
    } else {
      const loading = toast.loading("Sending tip...");
      try {
        const tip = {
          signer: provider.getSigner(),
          senderAddress: address,
          recipientAddress: "0x34ef30c856CbaeDD604034b7202D9D7de23277dc",
          amount: 5,
        } as Tip;
        const error = await sendTip(tip);
        toast.dismiss(loading);
        !error && toast.success("Tip sent!");
      } catch (error) {
        toast.update(loading, {
          render: "Failed to send tip!",
          type: "error",
          isLoading: false,
          autoClose: 5000,
        });
      }
    }
  };

  return (
    <div data-testid="tip-button">
      <Button
        className={`font-semibold bg-opacity-50 hover:bg-opacity-100 ${className}`}
        onClick={onClick}
      >
        Tip podfog 5 $KRAUSE
      </Button>
    </div>
  );
}
