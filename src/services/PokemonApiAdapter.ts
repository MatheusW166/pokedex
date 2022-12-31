import { PokemonRootEndpointResponseInterface } from "./endpoints/pokemon/models/PokemonRootEndpointResponseInterface";
import { PokemonApiRequestProtocols } from "./PokemonApiRequestProtocols";
import { PokemonEndpointBaseUrl } from "./endpoints/pokemon/PokemonEndpointBase";
import axios from "axios";

const endpointPokemon = axios.create({
  baseURL: PokemonEndpointBaseUrl,
  headers: { "Content-Type": "application/json" }
});

export class PokemonApiAdapter implements PokemonApiRequestProtocols {
  getPokemons(limit: number, offset: number): PokemonRootEndpointResponseInterface {
    endpointPokemon.get("/", {
      params: {
        limit: limit ?? 30,
        offset: offset ?? 0,
      },
    });
    return {
      count: 10,
      next: "",
      previous: "",
      results: [],
    };
  }
}