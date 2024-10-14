export async function getProducts(): Promise<{games: any[], availableFilters: string[]}> {
    const products = await fetch('http://localhost:3000/api/games');
    const res = await products.json();
    return res;
}