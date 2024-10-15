import React from 'react';
import {Product, useCart} from "@/app/(store)/cart/cart";

const CartItem = ({item}: {item: Product}) => {
    const cart = useCart();
    const handleClick = () => {
        cart.removeFromCart(item.id)
    }
    return (
        <div className={"cart-item"}>
            <img src={item.image} alt={""} className={ "md:max-w-[200px]" }/>
            <div className={"cart-item-description flex flex-col gap-3"}>
                <span className={"text-neutral-500 uppercase font-bold"}>{item.genre}</span>
                <span className={"text-xl font-bold"}>{item.name}</span>
                <span className={"text-neutral-500"}>{item.description}</span>
                <span className={"text-right font-bold mt-4"}>${item.price}</span>
            </div>
            <div className={"flex justify-end items-start"}>
                <button onClick={handleClick}>X</button>
            </div>
        </div>
    );
};

export default CartItem;