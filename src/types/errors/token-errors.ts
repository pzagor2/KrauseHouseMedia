import Error from "@/types/error";

export enum TokenErrorType {
  INSUFFICIENT_BALANCE = "Not enough tokens.",
  TRANSFER_FAILED = "Failed to transfer tokens.",
}

class TokenError implements Error {
  message: string;

  constructor(type: TokenErrorType) {
    this.message = type;
  }

  toString() {
    return this.message;
  }
}

export default TokenError;
