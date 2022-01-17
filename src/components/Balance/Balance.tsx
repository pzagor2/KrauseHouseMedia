import { useEffect, useState } from "react";

import useUSD from "@/hooks/use-usd";
import Currency from "@/types/currency";

interface BalanceProps {
  amount?: number;
  currency?: Currency;
}

export default function Balance({ amount, currency }: BalanceProps) {
  const [isError, setIsError] = useState(false);

  const {
    usd: usdBalance,
    isLoading: usdBalanceIsLoading,
    error: usdBalanceError,
  } = useUSD(amount ?? 0, currency ?? Currency.ETH);

  useEffect(() => {
    setIsError(
      amount === undefined ||
        currency === undefined ||
        usdBalanceError != undefined
    );
  }, [amount, currency, usdBalanceError]);

  const balance = (
    <div className="flex flex-col text-right">
      <div className="font-semibold text-3xl">
        $
        {usdBalance?.toLocaleString(undefined, {
          minimumFractionDigits: 2,
        })}
      </div>
      <div className="opacity-50">
        {amount} {currency}
      </div>
    </div>
  );

  if (isError) {
    return <div data-testid="error">Error...</div>;
  } else if (usdBalanceIsLoading) {
    return <div data-testid="loading">Loading...</div>;
  } else {
    return balance;
  }
}
