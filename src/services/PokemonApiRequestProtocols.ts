import { PokemonRootEndpointResponseInterface } from "./endpoints_response_interfaces/pokemon_endpoint/PokemonRootEndpointResponseInterface";

export interface PokemonApiRequestProtocols {
  getPokemons(limit: number, offset: number): PokemonRootEndpointResponseInterface;
}