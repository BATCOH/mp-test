export const sleep = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const formatData = (data: { name: string }[]): string => {
  return data
    .reduce((acc, { name }) => (acc += `${name},`), "")
    .replace(/,\s*$/, "");
};
