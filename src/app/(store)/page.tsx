import {CardProductList} from "@/components/card-product-list/card-product-list";

export default async function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
       <CardProductList/>
    </main>
  )
}
