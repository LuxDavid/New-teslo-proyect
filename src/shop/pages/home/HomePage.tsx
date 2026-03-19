import { CustomPagination } from "@/components/custom/CustomPagination";
import { CustomJumbotron } from "@/shop/components/CustomJumbotron";

export const HomePage = () => {
  return (
    <div>
      <CustomJumbotron title="Todos los productos"/>

      <CustomPagination totalPages={5}/>
    </div>
  )
}