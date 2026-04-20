import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { getProductAction } from "../actions/get-product-by-id.action";
import type { Product } from "@/interfaces/product.interface";
import { createUpdateProductAction } from "../actions/create-update-products";

export const useProduct= (id: string) => {

    const queryClient= useQueryClient();

    const query= useQuery({
        queryKey: ['product', {id}],
        queryFn: () => getProductAction(id),
        retry: false,
        staleTime: 1000 * 60 * 5 // 5 minutos
        //enable: || id
    });

    //TODO mutacion
    const mutation= useMutation({
        mutationFn: createUpdateProductAction,
        onSuccess: (product: Product) => {
            //Invalidar cache
            queryClient.invalidateQueries({queryKey:['products']});
            queryClient.invalidateQueries({queryKey:['product', {id: product.id}]});

            //Actualizar queryData
            queryClient.setQueryData(['products', {id: product.id}], product);
        }
    });

//      // TODO por eliminar
//   const handleSubmitForm= async (productLike: Partial<Product>) => {
//       console.log({productLike});
      
//   }

    return{
        ...query,
        // handleSubmitForm,
        mutation
    }
}