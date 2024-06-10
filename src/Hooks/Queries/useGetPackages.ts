import { getPackages } from '@Repo/AuthRepo'
import { IQuery } from '@Type/QueryType'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { Querykeys } from './queryname'

type IProps = IQuery<UseQueryOptions<any, Error, any, [string]>> & {
    uid: string
}

function useGetPackages(props?: IProps) {
    const uid = props?.uid || "";
    return useQuery({
        queryFn: () => getPackages(uid),
        queryKey: [Querykeys.getPackages],
        ...props
    })
}

export default useGetPackages