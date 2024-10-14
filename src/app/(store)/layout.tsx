import {Nav} from "@/components/nav/nav";
import React from "react";
import {Footer} from "@/components/footer";

export default function Layout({children}:  {children: React.ReactNode}) {
    return (<>
        <Nav></Nav>
        <main>{children}</main>
        <Footer></Footer>
    </>)
}