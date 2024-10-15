import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
const inter = Inter({subsets: ["latin"]});
import {CartProvider} from "./(store)/cart/cart";

export const metadata: Metadata = {
    title: "Apply Digital Test", description: "Frontend development test for Apply Digital",
};

export default function RootLayout({ children, }: Readonly<{
    children: React.ReactNode;
}>) {
    return (<html lang="en" className={inter.className}>
    <body className={"min-h-dvh"}>
    <CartProvider>
        {children}
    </CartProvider>
    </body>
    </html>);
}
