"use client"
import {CardProductList} from "@/components/card-product-list/card-product-list";
import {getGames} from "@/services/games";
import React, {ChangeEvent, useCallback, useEffect, useState} from "react";
import {usePathname, useSearchParams} from "next/navigation";
import {useRouter} from "next/navigation";
import {Button} from "@/components/button";

export default function Home() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    const genreFromParam = searchParams.get("genre") ?? 'all';
    const [games, setGames] = useState<any[]>([]);
    const [genres, setGenres] = useState<any[]>([]);
    const [genre, setGenre] = useState<string>(genreFromParam);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(()=>{
        setLoading(true);
        getGames({genre, page}).then((res) => {
            setGames(page === 1 ? res.games: [...games, ...res.games])
            setGenres(res.availableFilters)
            setLoading(false);
        });

    }, [genre, page])

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set(name, value)
            return params.toString()
        },
        [searchParams]
    )

    function handleChange(e: ChangeEvent<HTMLSelectElement>) {
        setGames([]);
        setGenre(e.target.value)
        setPage(1);
        router.push(`${pathname}?${createQueryString('genre', e.target.value)}`)
    }

    function loadMoreHandler() {
        setPage(page+1);
    }

  return (
      <>
          <div className="container py-12">
              <h1 className={"heading"}>Top Sellers</h1>
              <div className={"flex justify-end"}>
                  <div className="text-xl">
                      <span className={"font-bold"}>GENRE |</span>
                      <select onChange={handleChange} className={"focus-visible:outline-none text-right"}>
                          <option value={"all"}>All</option>
                          {genres.map((item, i) => {
                              return <option key={i}>{item}</option>
                          })}
                      </select>
                  </div>
              </div>
          </div>
          <CardProductList products={games} loading={loading}/>
          <Button label={"SEE MORE"} filled handleClick={loadMoreHandler}/>
      </>
  )
}
