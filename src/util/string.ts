export const isUndefinedOrWhitespace = (value: string | undefined): boolean => {
  return value === undefined || value.trim() === "";
};
