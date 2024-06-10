import { doRemoveFavourite } from '@Repo/AuthRepo';
import { IMutate } from '@Type/QueryType';
import { UseMutationOptions, useMutation } from '@tanstack/react-query';

type IProps = IMutate<UseMutationOptions<any, Error, any, unknown>>;

function useRemoveFavourite(props: IProps) {
    return useMutation({
        mutationKey: ["removeFavourite"],
        mutationFn: doRemoveFavourite,
        ...props,
    });
}

export default useRemoveFavourite