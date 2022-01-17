import { useEffect, useState } from "react";

import Account from "@/types/account";
import Currency from "@/types/currency";
import Error from "@/types/error";
import Result from "@/types/result";

const getAccount = async (accountAddress: string): Promise<Account> => {
  return {
    address: accountAddress,
    balance: 9.2,
    nativeCurrency: Currency.ETH,
    transactions: [10, -2, 5, -3, -3, -6, 2],
  };
};

type AccountResult = {
  account: Account | undefined;
};
export type useAccountResult = Result & AccountResult;

const useAccount = (accountAddress: string): useAccountResult => {
  const [account, setAccount] = useState<Account | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | undefined>(undefined);

  useEffect(() => {
    const fetchAccount = async () => {
      try {
        const account = await getAccount(accountAddress);
        setAccount(account);
      } catch (e) {
        setError({ message: "Error" });
      }
      setIsLoading(false);
    };

    fetchAccount();
  }, [accountAddress]);

  if (accountAddress === "") {
    return { account: undefined, isLoading, error };
  }

  return { account, isLoading, error };
};

export default useAccount;
