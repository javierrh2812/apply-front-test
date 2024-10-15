"use client"

import {Button} from "@/components/button";
import {Product, useCart} from "@/app/(store)/cart/cart";
import {useState} from "react";

export default function CardProduct(props: { product: Product }) {
    const cart = useCart();
    const product = props.product;
    const [isAdded, setIsAdded] = useState(!!cart.items.find(item=>item.product.id === product.id));

    const handleClick = () => {
        if (isAdded) {
            cart.removeFromCart(product.id)
        }
        else {
            cart.addToCart(product)
        }
        setIsAdded(!isAdded);
    }

    return <>
        <article className="rounded-2xl border-[0.5px] border-[#8f8f8f] p-6 text-black gap-5 grid">
            <a href={"#"}>
                <img src={product.image} alt={product.name} className="w-full max-h-52 rounded-t-2xl"/>
            </a>
            <div className="grid gap-5">
                <span className={"text-gray-500 font-bold uppercase"}>{product.genre}</span>
                <div className={"flex font-bold justify-between"}>
                    <span>{product.name}</span>
                    <span>{product.price}</span>
                </div>
                <div className="w-full">
                    <Button label={isAdded?'REMOVE' : 'ADD TO CART'} handleClick={handleClick} fullwidth/>
                </div>
            </div>
        </article>
    </>
}
