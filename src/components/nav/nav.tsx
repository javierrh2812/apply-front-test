import Link from "next/link";
import {useCart} from "@/app/(store)/cart/cart";
import {IoCartOutline} from "react-icons/io5";

export const Nav = () => {
    const cart = useCart()
    return (
        <header className="bg-neutral-200 py-5 px-6">
            <div className="max-w-screen-lg mx-auto flex justify-between gap-2 items-center">
                <span className="text-xl ">
                    <Link href={"/"}>
                     GamerShop
                    </Link>
                </span>
                <span className="relative">
                    <span className={"absolute -top-2 -right-2 text-white bg-neutral-700 rounded-full text-[11px] p-0.5"}>{cart.cartCount}</span>
                    <Link href={"/cart"}><IoCartOutline/></Link>
                </span>
            </div>
        </header>
    );
};
