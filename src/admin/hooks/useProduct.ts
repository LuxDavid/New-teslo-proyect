import { useQuery } from "@tanstack/react-query"
import { getProductAction } from "../actions/get-product-by-id.action";

export const useProduct= (id: string) => {
    const query= useQuery({
        queryKey: ['product', {id}],
        queryFn: () => getProductAction(id),
        retry: false,
        staleTime: 1000 * 60 * 5 // 5 minutos
        //enable: || id
    });

    // TODO mutacion

    return{
        ...query
    }
}