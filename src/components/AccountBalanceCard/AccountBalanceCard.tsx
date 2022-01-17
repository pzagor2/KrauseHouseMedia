import { useEffect, useState } from "react";

import Balance from "@/components/Balance/Balance";
import Card from "@/components/Card/Card";
import useAccount from "@/hooks/use-account";
import { isUndefinedOrWhitespace } from "@/util";

interface AccountBalanceCardProps {
  accountAddress: string;
}

export default function AccountBalanceCard({
  accountAddress,
}: AccountBalanceCardProps) {
  const [isError, setIsError] = useState(false);

  const {
    account,
    isLoading: accountIsLoading,
    error: accountError,
  } = useAccount(accountAddress);

  useEffect(() => {
    setIsError(
      isUndefinedOrWhitespace(accountAddress) || accountError != undefined
    );
  }, [accountAddress, accountError]);

  const accountBalanceCard = (
    <div className="w-full flex justify-between text-white">
      <div className="opacity-50 font-extralight text-3xl">
        {accountAddress}
      </div>
      <Balance amount={account?.balance} currency={account?.nativeCurrency} />
    </div>
  );

  return (
    <Card className="py-6 px-10">
      {isError ? (
        <div data-testid="error">Error...</div>
      ) : accountIsLoading ? (
        <div data-testid="loading">Loading...</div>
      ) : (
        accountBalanceCard
      )}
    </Card>
  );
}
