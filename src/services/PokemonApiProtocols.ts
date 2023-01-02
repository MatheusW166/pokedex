import { RequestError } from "../errors/RequestError";
import { PokemonEndpointResponse } from "./endpoints/endpoint_pokemon/models/PokemonEndpointResponse";
import { PokemonRootEndpointResponse } from "./endpoints/endpoint_pokemon/models/PokemonRootEndpointResponse";

export interface PokemonApiProtocols {
  getPokemons(
    limit: number,
    offset: number
  ): Promise<PokemonRootEndpointResponse | RequestError>;
  getPokemonByName(
    name: string
  ): Promise<PokemonEndpointResponse | RequestError>;
  getPokemonById(id: number): Promise<PokemonEndpointResponse | RequestError>;
}
