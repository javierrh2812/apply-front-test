export async function getGames({genre = 'all', page= 1}: {genre?: string, page?: number}): Promise<{games: any[], availableFilters: string[]}> {
    const api = `http://localhost:3000/api/games?genre=${genre}&page=${page}`
    const searchParams = new URLSearchParams({genre, page: `${page}`})
    const products = await fetch(api);
    return await products.json();
}