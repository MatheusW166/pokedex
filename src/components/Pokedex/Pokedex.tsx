import { useEffect, useState } from "react";
import { PokemonApiAdapter } from "../../services/PokemonApiAdapter";
import { PokemonRootEndpointResponse } from "../../services/endpoints/endpoint_pokemon/models/PokemonRootEndpointResponse";
import { PokemonEndpointResponse } from "../../services/endpoints/endpoint_pokemon/models/PokemonEndpointResponse";
import { isRequestError, RequestError } from "../../errors/RequestError";
import { PokemonCard } from "../../components/PokemonCard/PokemonCard";
import { Categories, toCategory } from "../../models/Categories";

type Pokemon = PokemonEndpointResponse;
type DetailsPromise = Promise<Pokemon | RequestError>;

interface PokedexProps {
  limit?: number;
  offset?: number;
  apiAdapter?: PokemonApiAdapter;
}

export function Pokedex({
  offset,
  limit = 20,
  apiAdapter = new PokemonApiAdapter()
}: PokedexProps) {
  const [pokemonPage, setPokemonPage] = useState<PokemonRootEndpointResponse>();
  const [pokemonsPageDetails, setPokemonsPageDetails] = useState<Pokemon[]>();

  async function getPokemonPage() {
    const res = await apiAdapter.getPokemons(limit, offset);
    if (isRequestError(res)) {
      return;
    }
    res.results;
    setPokemonPage(res);
  }

  async function getPokemonsPageDetails() {
    if (!pokemonPage) return;
    const promises: DetailsPromise[] = [];
    pokemonPage.results.forEach((item) => {
      promises.push(apiAdapter.getPokemonByName(item.name));
    });

    const promisesResult = await Promise.all(promises);
    const resolved = promisesResult.filter((res) => !isRequestError(res));
    setPokemonsPageDetails(resolved as Pokemon[]);
  }

  useEffect(() => {
    getPokemonPage();
  }, []);

  useEffect(() => {
    getPokemonsPageDetails();
  }, [pokemonPage]);

  function getPokemonImg(pokemon: Pokemon): string {
    return (
      pokemon.sprites.other.dream_world.front_default ??
      pokemon.sprites.other["official-artwork"].front_default
    );
  }

  function getPokemonCategories(pokemon: Pokemon): Categories[] {
    return pokemon.types.map((type) => toCategory(type.type.name));
  }

  return (
    <>
      {pokemonsPageDetails?.map((pk, idx) => {
        return (
          <PokemonCard
            key={idx}
            order={pk.order}
            name={pk.name}
            image={getPokemonImg(pk)}
            categories={getPokemonCategories(pk)}
          />
        );
      })}
    </>
  );
}
