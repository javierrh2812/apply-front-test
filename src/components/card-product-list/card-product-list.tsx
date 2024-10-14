import {getProducts} from "@/app/lib/getProducts";
import CardProduct from "@/components/card-product/card-product";
import {ProductFilter} from "@/components/card-product-list/product-filter";

export async function CardProductList() {
   const products = await getProducts();
   const handleChange = ()=>{

   }

   return <>
      <div className="container">
         <h1>Top Sellers</h1>
         <div>
            <ProductFilter filters={products.availableFilters} onChange={handleChange}/>
         </div>
      </div>
      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 ">
       {products.games.map((game, index) => (
           <CardProduct product={game} key={index}/>
       ))}
      </div>
   </>
}