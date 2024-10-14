"use client"

import {Button} from "@/components/button";
import {addItemToCart} from "@/app/lib/cart";

export default function CardProduct(props:
    {
      product: { genre: string, name: string, price: string, isNew?: boolean, description: string, image: string}
    }) {
    const product = props.product;

    const handleClick = () => {
        addItemToCart(product)
    }

    return <>
        <article className="rounded-2xl border-[0.5px] border-gray-500 p-3 text-black text-[16px] gap-5 grid">
            <img src={product.image} alt={product.name} className="w-fill rounded-t-2xl"/>
            <span className={"text-gray-500"}>{product.genre}</span>
            <div className={"flex font-bold justify-between"}>
                <span>{product.name}</span>
                <span>{product.price}</span>
            </div>
            <div className="w-full">
            <Button label={'ADD TO CART'} handleClick={handleClick}/>
            </div>
        </article>
    </>
}