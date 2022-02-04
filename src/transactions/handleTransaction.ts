import { toast } from "react-toastify";

import Error from "@/types/error";

export type TransactionMessages = {
  pending?: string;
  success?: string;
  error?: string;
};

/* eslint-disable  @typescript-eslint/no-explicit-any */
const handleTransaction = async (
  tx: (input: any) => Promise<Error | undefined>,
  input: any,
  messages?: TransactionMessages
) => {
  /* eslint-enable  @typescript-eslint/no-explicit-any */
  const loading = toast.loading(messages?.pending ?? "Pending...");
  try {
    const error = await tx(input);
    if (!error) {
      toast.update(loading, {
        render: messages?.success ?? "Transaction successful!",
        type: "success",
        isLoading: false,
        autoClose: 5000,
      });
    } else {
      toast.update(loading, {
        render: messages?.error ?? error.message,
        type: "error",
        isLoading: false,
        autoClose: 5000,
      });
    }
  } catch (error) {
    toast.update(loading, {
      render: "An unexpected error occurred.",
      type: "error",
      isLoading: false,
      autoClose: 5000,
    });
  }
};

export default handleTransaction;
