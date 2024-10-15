"use client"
import {createContext, useContext, useEffect, useState} from "react";

export type Product = {id: number, genre: string, name: string, price: number, isNew?: boolean, description: string, image: string};
export type Item = {product: Product, qty: number}

interface CartContextValue {
    items: Item[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: number) => void;
    updateCartItemQuantity: (productId: number, quantity: number) => void;
    cartTotal: number;
    cartCount: number;
}

const CartContext = createContext<CartContextValue>({
    items: [],
    addToCart: () => {},
    removeFromCart: () => {},
    updateCartItemQuantity: () => {},
    cartTotal: 0,
    cartCount: 0,
});

export const useCart = () => {
    return useContext(CartContext);
};

interface Props {
    children: React.ReactNode;
}

export const CartProvider = ({ children }: Props) => {
    const [cartItems, setCartItems] = useState<Item[]>([]);

    useEffect(()=>{
       const cartFromLocalStorage = localStorage.getItem("cartItems");
       if (cartFromLocalStorage) {
           setCartItems(JSON.parse(cartFromLocalStorage))
       }
    }, [])

    const updateCart = (cartItems: any) => {
       localStorage.setItem("cartItems", JSON.stringify(cartItems))
        setCartItems(cartItems);
    }

    const addToCart = (product: Product) => {
        const existingCartItemIndex = cartItems.findIndex(
            (item) => item.product.id === product.id
        );
        if (existingCartItemIndex !== -1) {
            const existingCartItem = cartItems[existingCartItemIndex];
            const updatedCartItem = {
                ...existingCartItem,
                quantity: existingCartItem.qty + 1,
            };
            const updatedCartItems = [...cartItems];
            updatedCartItems[existingCartItemIndex] = updatedCartItem;
            updateCart(updatedCartItems);
        } else {
            updateCart([...cartItems, { product, qty: 1 }]);
        }
    };

    const removeFromCart = (productId: number) => {
        const updatedCartItems = cartItems.filter(
            (item) => item.product.id !== productId
        );
        updateCart(updatedCartItems);
    };

    const updateCartItemQuantity = (productId: number, quantity: number) => {
        const existingCartItemIndex = cartItems.findIndex(
            (item) => item.product.id === productId
        );
        if (existingCartItemIndex !== -1) {
            const existingCartItem = cartItems[existingCartItemIndex];
            const updatedCartItem = {
                ...existingCartItem,
                quantity,
            };
            const updatedCartItems = [...cartItems];
            updatedCartItems[existingCartItemIndex] = updatedCartItem;
            updateCart(updatedCartItems);
        }
    };

    const cartTotal = cartItems.reduce(
        (total, item) => total + item.product.price * item.qty,
        0
    );

    const cartCount = cartItems.reduce((count, item) => count + item.qty, 0);

    return (
        <CartContext.Provider
            value={{
            items: cartItems,
            addToCart,
            removeFromCart,
            updateCartItemQuantity,
            cartTotal,
            cartCount,
    }} >
        {children}
    </CartContext.Provider>
);
};

