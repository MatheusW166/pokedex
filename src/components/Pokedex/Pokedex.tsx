import { createContext, useEffect, useState } from "react";
import { after } from "../../utils/after";
import { usePaginator } from "../../hooks/usePaginator";
import { usePokemons } from "../../hooks/usePokemons";
import { Paginator } from "../Paginator";
import { PokedexList } from "./PokedexList";
import { Loader } from "../Loader/Loader";
import clsx from "clsx";

interface LoadingContextProps {
  onLoad?(): undefined;
}

export const LoadingContext = createContext<LoadingContextProps | null>(null);

export function Pokedex() {
  const { pokemonsData, searchPokemonPage } = usePokemons({});
  const { page, setPage } = usePaginator();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    searchPokemonPage(page);
  }, [page]);

  const verifyAndSetPage = (page: number) => {
    if (page < 1 || page > pokemonsData.pageData.totalPages) {
      return;
    }
    setPage(page);
    setLoading(true);
  };

  const afterLoading = after(20, () => {
    setLoading(false);
  });

  return (
    <div className="pokedex">
      <Paginator
        pageNumber={page}
        totalPages={pokemonsData.pageData.totalPages}
        onNavigateBack={() => verifyAndSetPage(page - 1)}
        onNavigateNext={() => verifyAndSetPage(page + 1)}
      />
      <LoadingContext.Provider
        value={{
          onLoad: () => afterLoading()
        }}
      >
        <div className="pokedex-list">
          {isLoading && <Loader />}
          <PokedexList
            className={clsx(isLoading && "hidden")}
            pokemonPageDetails={pokemonsData.pokemons}
          />
        </div>
      </LoadingContext.Provider>
      <Paginator
        className={isLoading ? "hidden" : ""}
        pageNumber={page}
        totalPages={pokemonsData.pageData.totalPages}
        onNavigateBack={() => verifyAndSetPage(page - 1)}
        onNavigateNext={() => verifyAndSetPage(page + 1)}
      />
    </div>
  );
}
