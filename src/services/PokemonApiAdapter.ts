import { PokemonRootEndpointResponseInterface } from "./endpoints/pokemon/models/PokemonRootEndpointResponseInterface";
import { PokemonApiRequestProtocols } from "./PokemonApiRequestProtocols";
import { PokemonEndpointBaseUrl } from "./endpoints/pokemon/PokemonEndpointBaseUrl";
import axios from "axios";

const endpointPokemon = axios.create({
  baseURL: PokemonEndpointBaseUrl,
  headers: { "Content-Type": "application/json" }
});

export class PokemonApiAdapter implements PokemonApiRequestProtocols {
  async getPokemons(limit = 30, offset = 0): Promise<PokemonRootEndpointResponseInterface> {
    const resp = await endpointPokemon.get("/", {
      params: {
        limit: limit,
        offset: offset,
      },
    });

    const { count, next, previous, results } = resp.data;
    return {
      count,
      next,
      previous,
      results,
    };
  }
}