import { useCallback, useEffect } from "react";
import { usePaginator } from "../../hooks/usePaginator";
import { usePokemons } from "../../hooks/usePokemons";
import { Paginator } from "../Paginator";
import { PokedexList } from "./PokedexList";

export function Pokedex() {
  const { pokemonsData, searchPokemonPage } = usePokemons({});
  const { page, setPage } = usePaginator();

  useEffect(() => {
    searchPokemonPage(page);
  }, [page]);

  const buildPaginator = useCallback(
    () => (
      <Paginator
        pageNumber={page}
        totalPages={pokemonsData.pageData.totalPages}
        onNavigateBack={() => setPage(page - 1)}
        onNavigateNext={() => setPage(page + 1)}
      />
    ),
    [pokemonsData.pageData.totalPages, page]
  );

  return (
    <div className="pokedex">
      {buildPaginator()}
      <div className="pokedex-list">
        <PokedexList pokemonPageDetails={pokemonsData.pokemons} />
      </div>
      {buildPaginator()}
    </div>
  );
}
