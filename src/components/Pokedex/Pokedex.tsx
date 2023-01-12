import { useCallback, useEffect, useState } from "react";
import { usePaginator } from "../../hooks/usePaginator";
import { usePokemons } from "../../hooks/usePokemons";
import { Paginator } from "../Paginator";
import { PokedexList } from "./PokedexList";
import { Loader } from "../Loader/Loader";

export function Pokedex() {
  const { pokemonsData, searchPokemonPage } = usePokemons({});
  const { page, setPage } = usePaginator();
  const [isLoading] = useState(false);

  useEffect(() => {
    searchPokemonPage(page);
  }, [page]);

  const verifyAndSetPage = useCallback(
    (page: number) => {
      if (page < 1 || page > pokemonsData.pageData.totalPages) {
        return;
      }
      setPage(page);
    },
    [pokemonsData.pageData.totalPages]
  );

  return (
    <div className="pokedex">
      <Paginator
        pageNumber={page}
        totalPages={pokemonsData.pageData.totalPages}
        onNavigateBack={() => verifyAndSetPage(page - 1)}
        onNavigateNext={() => verifyAndSetPage(page + 1)}
      />
      <div className="pokedex-list">
        {isLoading ? (
          <Loader />
        ) : (
          <PokedexList pokemonPageDetails={pokemonsData.pokemons} />
        )}
      </div>
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
