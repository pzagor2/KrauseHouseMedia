import { useEffect, useState } from "react";

import Currency from "@/types/currency";
import Error from "@/types/error";
import Result from "@/types/result";

const getUSD = async (
  amount: number,
  fromCurrency: Currency
): Promise<number> => {
  return 32045;
};

type USDResult = { usd: number | undefined };
export type useUSDResult = Result & USDResult;

const useUSD = (amount: number, fromCurrency: Currency): useUSDResult => {
  const [usd, setUSD] = useState<number | undefined>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | undefined>();

  useEffect(() => {
    const fetchUSD = async () => {
      try {
        const usd = await getUSD(amount, fromCurrency);
        setUSD(usd);
      } catch (e) {
        setError({ message: "Error" });
      }
      setIsLoading(false);
    };

    fetchUSD();
  }, [amount, fromCurrency]);

  return { usd, isLoading, error };
};

export default useUSD;
