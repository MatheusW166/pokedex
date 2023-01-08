import { useEffect, useState } from "react";
import { isRequestError, RequestError } from "../errors/RequestError";
import { PokemonEndpointResponse } from "../services/endpoints/endpoint_pokemon/models/PokemonEndpointResponse";
import { PokemonRootEndpointResponse } from "../services/endpoints/endpoint_pokemon/models/PokemonRootEndpointResponse";
import { PokemonApiAdapter } from "../services/PokemonApiAdapter";

type Pokemon = PokemonEndpointResponse;
type PokemonPage = PokemonRootEndpointResponse;
type DetailsPromise = Promise<Pokemon | RequestError>;

interface UsePokemonsPageProps {
  pageLimit?: number;
  apiAdapter?: PokemonApiAdapter;
}

export function usePokemonsPage({
  pageLimit = 20,
  apiAdapter = new PokemonApiAdapter()
}: UsePokemonsPageProps) {
  const [pokemonPageData, setPokemonPageData] = useState<PokemonPage>();

  async function searchPokemonPage(page: number) {
    const res = await apiAdapter.getPokemons(pageLimit, pageLimit * (page - 1));
    if (isRequestError(res)) {
      return;
    }
    setPokemonPageData(res);
  }
  const calcTotalPages = () => Math.ceil(pokemonPageData?.count ?? 0 / pageLimit);

  return {
    pageData: {
      pokemonPageData,
      totalPages: calcTotalPages()
    },
    searchPokemonPage
  };
}

interface UsePokemonsDetailsProps {
  apiAdapter?: PokemonApiAdapter;
}

export function usePokemons({
  apiAdapter = new PokemonApiAdapter()
}: UsePokemonsDetailsProps) {
  const { pageData, searchPokemonPage } = usePokemonsPage({});
  const [pokemons, setPokemons] = useState<Pokemon[]>();

  async function searchPokemons() {
    if (!pageData.pokemonPageData) return;
    const promises: DetailsPromise[] = [];
    pageData.pokemonPageData.results.forEach((item) => {
      promises.push(apiAdapter.getPokemonByName(item.name));
    });

    const promisesResult = await Promise.all(promises);
    const resolved = promisesResult.filter((res) => !isRequestError(res));
    setPokemons(resolved as Pokemon[]);
  }

  useEffect(() => {
    searchPokemons();
  }, [pageData.pokemonPageData?.results]);

  return { pokemonsData: { pokemons, pageData }, searchPokemonPage };
}
