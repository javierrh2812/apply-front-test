import CardProduct from "@/components/card-product/card-product";

export function CardProductList({products, loading}: {products:any[], loading: boolean}  ) {

    const Loading = ()=> <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-7">
        {Array.from(Array(6)).map((a, index)=>{
            return <div key={index} className={"rounded-2xl animate-pulse bg-neutral-300 max-w-xl h-40"}></div>
        })}
     </div>

   return <>
      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-7">
         {products.map((product, index) => (
             <CardProduct product={product} key={index}/>
         ))}

      </div>

       {loading && <Loading/>}
   </>
         }