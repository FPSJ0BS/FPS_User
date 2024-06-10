export type QueryType = {
  [key: string]: any;
};
export const getQuery = (filter: QueryType) => {
  const obj = {
    ...filter,
  };
  return Object.keys(obj)
    .map((key) => key + "=" + obj[key])
    .join("&");
};
