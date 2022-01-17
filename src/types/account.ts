import Currency from "./currency";

type Account = {
  address: string;
  balance: number;
  nativeCurrency: Currency;
  transactions: number[];
};

export default Account;
