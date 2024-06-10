export type IMutate<T> = Omit<T, "mutationKey" | "mutationFn">;

export type IQuery<T> = Omit<T, "queryKey" | "queryFn">;
