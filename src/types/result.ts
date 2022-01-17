import Error from "@/types/error";

type Result = {
  isLoading: boolean;
  error: Error | undefined;
};

export default Result;
