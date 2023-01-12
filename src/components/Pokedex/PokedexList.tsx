import { PokemonEndpointResponse } from "../../services/endpoints/endpoint_pokemon/models/PokemonEndpointResponse";
import { PokemonCard } from "../PokemonCard";
import React from "react";
import { getPokemonCategories, getPokemonImg } from "../../utils/pokemonCardUtils";

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
