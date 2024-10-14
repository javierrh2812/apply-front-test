import { createContext, useContext, useState } from "react";

export type Product = any;
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
            setCartItems(updatedCartItems);
        } else {
            setCartItems([...cartItems, { product, qty: 1 }]);
        }
    };

    const removeFromCart = (productId: number) => {
        const updatedCartItems = cartItems.filter(
            (item) => item.product.id !== productId
        );
        setCartItems(updatedCartItems);
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
            setCartItems(updatedCartItems);
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
    }}
>
    {children}
    </CartContext.Provider>
);
};

