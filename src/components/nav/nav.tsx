import Link from "next/link";

export const Nav = () => {
    return (
        <header className="border-b py-4">
            <div
                className="sm:items-centerm mx-auto flex max-w-7xl flex-col items-start gap-2 px-4 sm:flex-row sm:flex-wrap sm:items-center sm:px-6 md:flex-nowrap lg:px-8">
                <span className="-mt-0.5 whitespace-nowrap text-xl ">GamerShop</span>
                <span className="-mt-0.5 whitespace-nowrap  ">Carrito</span>
            </div>
        </header>
    );
};
