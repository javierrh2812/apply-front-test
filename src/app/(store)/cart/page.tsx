"use client"

import Link from "next/link";
import {getCart} from "@/app/lib/cart";

export default function Page() {
    const cart = getCart();

    return (<div className={"container"}>
        <Link href={'/'}> {"<- Back to catalog"} </Link>
        <h1>Your Cart</h1>
        <span>{cart.items.length} {" items"}</span>

        <div className={"grid grid-cols-1 sm:grid-cols-2"}>
            <div> cart items </div>
            <div> order summary </div>
        </div>
    </div>)
}