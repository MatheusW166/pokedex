import { PokemonRootEndpointResponseInterface } from "./endpoints_response_interfaces/pokemon_endpoint/PokemonRootEndpointResponseInterface";
import { PokemonApiRequestProtocols } from "./PokemonApiRequestProtocols";
import axios from "axios";

const endpointPokemon = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon/",
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