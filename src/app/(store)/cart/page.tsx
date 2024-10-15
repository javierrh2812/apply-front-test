"use client"
import Link from "next/link";
import {useCart} from "@/app/(store)/cart/cart";
import {Button} from "@/components/button";
import CartItem from "@/app/(store)/cart/cart-item";
export default function Page() {
    const cart = useCart();

    return (<div>
        <Link href={'/'}> {"<- Back to catalog"} </Link>
        <h1 className={"heading pt-5"}>Your Cart</h1>
        <span className={"text-2xl"}>{cart.cartCount} {" items"}</span>

        <div className={"grid grid-cols-1 sm:grid-cols-2 gap-20"}>
            <div className={"flex flex-col"}>
                {cart.items.map((item, i) => {
                    return <CartItem item={item.product} key={i}/>
                })}
            </div>
            <div>
                <div className={"flex flex-col py-8 px-6 border-[0.5px] border-[#8f8f8f] rounded-lg mb-5 gap-3"}>
                    <span className={"text-2xl font-bold"}>Order Summary</span>
                    <span className={"text-[18px]"}>{`${cart.cartCount} items`}</span>
                    <ul className={"text-[18px]"}>
                    {cart.items.map((item, i) => {
                        return <li key={i} className={"flex justify-between"}>
                            <span> {item.product.name} </span>
                            <span> {item.product.price} </span>
                        </li>
                    })}
                    </ul>

                    <div className={"border-t-neutral-500 flex justify-between text-xl font-bold"}>
                        <span> Order Total</span>
                        <span> ${cart.cartTotal}</span>
                    </div>
                </div>
                
                <Button filled fullwidth label={"Checkout"} handleClick={()=>{}}/>
            </div>
        </div>
    </div>)
}
