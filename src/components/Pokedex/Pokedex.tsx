import { useEffect, useState } from "react";
import { after } from "../../utils/after";
import { usePaginator } from "../../hooks/usePaginator";
import { usePokemons } from "../../hooks/usePokemons";
import { Paginator } from "../Paginator";
import { Loader } from "../Loader/Loader";
import clsx from "clsx";
import { PokemonEndpointResponse } from "../../services/endpoints/endpoint_pokemon/models/PokemonEndpointResponse";
import React from "react";
import { PokemonCard } from "../PokemonCard";
import { getPokemonCategories, getPokemonImg } from "../../utils/pokemonCardUtils";
import { LoadingContext } from "../../contexts/LoadingContext";

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
    </div>
  );
}

interface PokedexListProps {
  className?: string;
  pokemonPageDetails?: PokemonEndpointResponse[];
}

export const PokedexList = React.memo(function PokedexList({
  pokemonPageDetails,
  className
}: PokedexListProps) {
  return (
    <div className={className}>
      {pokemonPageDetails?.map((pk, idx) => {
        return (
          <PokemonCard
            key={idx}
            appearOrder={idx}
            order={pk.order}
            name={pk.name}
            image={getPokemonImg(pk)}
            categories={getPokemonCategories(pk)}
          />
        );
      })}
    </div>
  );
});
