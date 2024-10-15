"use client"
import {Nav} from "@/components/nav/nav";
import React from "react";
import {Footer} from "@/components/footer";
import {CartProvider} from "@/app/(store)/cart/cart";

export default function Layout({children}:  {children: React.ReactNode}) {
    return (
        <div className="layout">
            <Nav></Nav>
            <main className={"max-w-screen-lg py-6 px-6 mx-auto w-full"}>{children}</main>
            <Footer></Footer>
        </div>
    )
}